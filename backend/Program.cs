using Backend.Domain.Interfaces;
using Backend.Infrastructure.Data;
using Backend.Infrastructure.Repositories;
using Backend.Infrastructure.Services;
using Backend.Application.Queries;
using Backend.Application.Commands;
using Backend.Application.Commands.AcceptLead;
using Backend.Application.Commands.DeclineLead;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add CORS
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Add DbContext
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlite("Data Source=leads.db"));

// Add Repository
builder.Services.AddScoped<ILeadRepository, LeadRepository>();

// Register Query Handlers
builder.Services.AddScoped<IQueryHandler<GetPendingLeadsQuery, IEnumerable<LeadDto>>, GetPendingLeadsQueryHandler>();
builder.Services.AddScoped<IQueryHandler<GetAcceptedLeadsQuery, IEnumerable<AcceptedLeadDto>>, GetAcceptedLeadsQueryHandler>();
builder.Services.AddScoped<IQueryDispatcher, QueryDispatcher>();

// Register Command Handlers
builder.Services.AddScoped<ICommandHandler<DeclineLeadCommand, bool>, DeclineLeadCommandHandler>();
builder.Services.AddScoped<ICommandHandler<AcceptLeadCommand, bool>, AcceptLeadCommandHandler>();
builder.Services.AddScoped<ICommandDispatcher, CommandDispatcher>();

// Register Services
builder.Services.AddScoped<IEmailService, FakeEmailService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors();

// Create and migrate the database
using (var scope = app.Services.CreateScope())
{
    var dbContext = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
    dbContext.Database.Migrate();
}

app.MapGet("/leads", async (IQueryDispatcher dispatcher) =>
{
    var query = new GetPendingLeadsQuery();
    return await dispatcher.Dispatch<GetPendingLeadsQuery, IEnumerable<LeadDto>>(query);
})
.WithName("GetPendingLeads")
.WithOpenApi();

app.MapGet("/leads/accepted", async (IQueryDispatcher dispatcher) =>
{
    var query = new GetAcceptedLeadsQuery();
    return await dispatcher.Dispatch<GetAcceptedLeadsQuery, IEnumerable<AcceptedLeadDto>>(query);
})
.WithName("GetAcceptedLeads")
.WithOpenApi();

app.MapPost("/lead/accept/{id}", async (int id, ICommandDispatcher dispatcher) =>
{
    var command = new AcceptLeadCommand(id);
    var result = await dispatcher.Dispatch<AcceptLeadCommand, bool>(command);
    
    if (!result)
    {
        return Results.NotFound();
    }
    
    return Results.Ok();
})
.WithName("AcceptLead")
.WithOpenApi();

app.MapPost("/lead/decline/{id}", async (int id, ICommandDispatcher dispatcher) =>
{
    var command = new DeclineLeadCommand(id);
    var result = await dispatcher.Dispatch<DeclineLeadCommand, bool>(command);
    
    if (!result)
    {
        return Results.NotFound();
    }
    
    return Results.Ok();
})
.WithName("DeclineLead")
.WithOpenApi();

app.Run();
