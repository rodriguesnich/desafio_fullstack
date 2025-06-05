using Backend.Domain.Interfaces;
using Backend.Infrastructure.Data;
using Backend.Infrastructure.Repositories;
using Backend.Application.Queries;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add DbContext
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlite("Data Source=leads.db"));

// Add Repository
builder.Services.AddScoped<ILeadRepository, LeadRepository>();

// Register Query Handlers
builder.Services.AddScoped<IQueryHandler<GetPendingLeadsQuery, IEnumerable<LeadDto>>, GetPendingLeadsQueryHandler>();
builder.Services.AddScoped<IQueryHandler<GetAcceptedLeadsQuery, IEnumerable<AcceptedLeadDto>>, GetAcceptedLeadsQueryHandler>();
builder.Services.AddScoped<IQueryDispatcher, QueryDispatcher>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

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

app.Run();
