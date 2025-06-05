using Backend.Domain.Entities;

namespace Backend.Domain.Interfaces
{
    public interface IEmailService
    {
        Task SendAcceptanceEmailAsync(Lead lead);
    }
}
