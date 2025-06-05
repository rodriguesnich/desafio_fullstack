using Backend.Domain.Entities;

namespace Backend.Application.Queries
{
    public class GetPendingLeadsQuery : IQuery<IEnumerable<LeadDto>>
    {
    }

    public class LeadDto
    {
        public string ID { get; set; }
        public string ContactFirstName { get; set; }
        public string Suburb { get; set; }
        public string Category { get; set; }
        public DateTime DateCreated { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
    }
}
