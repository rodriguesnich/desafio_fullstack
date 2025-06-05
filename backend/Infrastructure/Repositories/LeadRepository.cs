using Backend.Domain.Entities;
using Backend.Domain.Interfaces;
using Backend.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Backend.Infrastructure.Repositories
{
    public class LeadRepository : ILeadRepository
    {
        private readonly ApplicationDbContext _context;

        public LeadRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Lead>> GetAcceptedLeadsAsync()
        {
            return await _context.Leads
                .Where(l => l.Status == "accepted")
                .ToListAsync();
        }

        public async Task<IEnumerable<Lead>> GetPendingLeadsAsync()
        {
            return await _context.Leads
                .Where(l => l.Status == "pending")
                .ToListAsync();
        }
    }
}
