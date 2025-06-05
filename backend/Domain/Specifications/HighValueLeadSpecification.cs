using Backend.Domain.Entities;

namespace Backend.Domain.Specifications
{
    public class HighValueLeadSpecification : ISpecification<Lead>
    {
        private readonly decimal threshold;

        public HighValueLeadSpecification(decimal threshold = 500m)
        {
            this.threshold = threshold;
        }

        public bool IsSatisfiedBy(Lead lead)
        {
            return lead.Price > threshold;
        }
    }
}
