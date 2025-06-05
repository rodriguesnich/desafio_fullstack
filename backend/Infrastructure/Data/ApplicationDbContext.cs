using Backend.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Backend.Infrastructure.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Lead> Leads { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Seed data
            var seedDate = new DateTime(2025, 6, 5);
            modelBuilder.Entity<Lead>().HasData(
                new Lead
                {
                    Id = 1,
                    Status = "accepted",
                    DateCreated = seedDate,
                    ContactName = "John Doe",
                    ContactPhoneNumber = "1234567890",
                    ContactEmail = "john@example.com",
                    Suburb = "Downtown",
                    Category = "Plumbing",
                    Description = "Fix leaking tap",
                    Price = 150.00M
                },
                new Lead
                {
                    Id = 2,
                    Status = "pending",
                    DateCreated = seedDate,
                    ContactName = "Jane Smith",
                    ContactPhoneNumber = "0987654321",
                    ContactEmail = "jane@example.com",
                    Suburb = "Uptown",
                    Category = "Electrical",
                    Description = "Install new lights",
                    Price = 200.00M
                }
            );
        }
    }
}
