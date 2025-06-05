using Backend.Domain.Interfaces;
using Backend.Infrastructure.Data;
using Backend.Infrastructure.Repositories;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add DbContext
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlite("Data Source=leads.db"));

// Add Repository
builder.Services.AddScoped<ILeadRepository, LeadRepository>();

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

app.MapGet("/leads/accepted", async (ILeadRepository repository) =>
{
    var leads = await repository.GetAcceptedLeadsAsync();
    return leads.Select(l => new
    {
        l.Id,
        ContactFullName = l.ContactName,
        l.Suburb,
        l.Category,
        l.DateCreated,
        l.Description,
        l.Price,
        l.ContactPhoneNumber,
        l.ContactEmail
    });
})
.WithName("GetAcceptedLeads")
.WithOpenApi();

app.Run();
