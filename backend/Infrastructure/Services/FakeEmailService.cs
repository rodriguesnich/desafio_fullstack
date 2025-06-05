using Backend.Domain.Entities;
using Backend.Domain.Interfaces;
using Microsoft.Extensions.Logging;

namespace Backend.Infrastructure.Services
{
    public class FakeEmailService : IEmailService
    {
        private readonly ILogger<FakeEmailService> _logger;
        private const string SALES_EMAIL = "vendas@test.com";

        public FakeEmailService(ILogger<FakeEmailService> logger)
        {
            _logger = logger;
        }

        public async Task SendAcceptanceEmailAsync(Lead lead)
        {
            var message = CreateEmailMessage(lead);
            _logger.LogInformation("Simulating email sent to {SalesEmail}. Message: {Message}", 
                SALES_EMAIL, message);
            
            await Task.CompletedTask; // Simulate async operation
        }

        private string CreateEmailMessage(Lead lead)
        {
            return $@"
Lead Acceptance Notification
---------------------------
Lead ID: {lead.Id}
Contact: {lead.ContactName}
Category: {lead.Category}
Description: {lead.Description}
Price: ${lead.Price:F2}
Status: {lead.Status}
";
        }
    }
}
