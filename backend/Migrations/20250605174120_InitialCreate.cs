using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Leads",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Status = table.Column<string>(type: "TEXT", nullable: false),
                    DateCreated = table.Column<DateTime>(type: "TEXT", nullable: false),
                    ContactName = table.Column<string>(type: "TEXT", nullable: false),
                    ContactPhoneNumber = table.Column<string>(type: "TEXT", nullable: false),
                    ContactEmail = table.Column<string>(type: "TEXT", nullable: false),
                    Suburb = table.Column<string>(type: "TEXT", nullable: false),
                    Category = table.Column<string>(type: "TEXT", nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: false),
                    Price = table.Column<decimal>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Leads", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Leads",
                columns: new[] { "Id", "Category", "ContactEmail", "ContactName", "ContactPhoneNumber", "DateCreated", "Description", "Price", "Status", "Suburb" },
                values: new object[,]
                {
                    { 1, "Plumbing", "john@example.com", "John Doe", "1234567890", new DateTime(2025, 6, 5, 0, 0, 0, 0, DateTimeKind.Unspecified), "Fix leaking tap", 150.00m, "accepted", "Downtown" },
                    { 2, "Electrical", "jane@example.com", "Jane Smith", "0987654321", new DateTime(2025, 6, 5, 0, 0, 0, 0, DateTimeKind.Unspecified), "Install new lights", 200.00m, "pending", "Uptown" },
                    { 3, "Electrical", "bill@example.com", "Bill Smith", "0987654321", new DateTime(2025, 6, 5, 0, 0, 0, 0, DateTimeKind.Unspecified), "Install new lights", 200.00m, "pending", "Uptown" },
                    { 4, "Electrical", "jane@example.com", "Jane Smith", "0987654321", new DateTime(2025, 6, 5, 0, 0, 0, 0, DateTimeKind.Unspecified), "Install new lights", 200.00m, "declined", "Uptown" },
                    { 5, "Plumbing", "cosby@example.com", "Cosby James", "0987654321", new DateTime(2025, 6, 5, 0, 0, 0, 0, DateTimeKind.Unspecified), "Install new lights", 200.00m, "pending", "Uptown" },
                    { 6, "Plumbing", "mosby@example.com", "Mosby James", "0987654321", new DateTime(2025, 6, 5, 0, 0, 0, 0, DateTimeKind.Unspecified), "Install new lights", 200.00m, "accepted", "Uptown" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Leads");
        }
    }
}
