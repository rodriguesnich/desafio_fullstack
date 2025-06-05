using Backend.Domain.Entities;

namespace Backend.Application.Queries
{
    public class GetAcceptedLeadsQuery : IQuery<IEnumerable<AcceptedLeadDto>>
    {
    }

    public class AcceptedLeadDto
    {
        public int Id { get; set; }
        public string ContactFullName { get; set; }
        public string Suburb { get; set; }
        public string Category { get; set; }
        public DateTime DateCreated { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string ContactPhoneNumber { get; set; }
        public string ContactEmail { get; set; }
    }
}
