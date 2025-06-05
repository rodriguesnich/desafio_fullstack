using Backend.Domain.Entities;

namespace Backend.Domain.Interfaces
{
    public interface ILeadRepository
    {
        Task<IEnumerable<Lead>> GetAcceptedLeadsAsync();
        Task<IEnumerable<Lead>> GetPendingLeadsAsync();
    }
}
