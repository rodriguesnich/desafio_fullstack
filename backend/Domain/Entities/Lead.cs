using Backend.Domain.Specifications;

namespace Backend.Domain.Entities
{
    public class Lead
    {
        public int Id { get; set; }
        public string Status { get; set; } = "pending";
        public DateTime DateCreated { get; set; }
        public string ContactName { get; set; } = string.Empty;
        public string ContactPhoneNumber { get; set; } = string.Empty;
        public string ContactEmail { get; set; } = string.Empty;
        public string Suburb { get; set; } = string.Empty;
        public string Category { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public decimal Price { get; set; }

        private readonly ISpecification<Lead> _highValueSpecification;
        private const decimal DISCOUNT_PERCENTAGE = 0.9m;

        public Lead()
        {
            _highValueSpecification = new HighValueLeadSpecification();
        }

        public void Accept()
        {
            if (_highValueSpecification.IsSatisfiedBy(this))
            {
                ApplyDiscount();
            }
            Status = "accepted";
        }

        public void Decline()
        {
            Status = "declined";
        }

        private void ApplyDiscount()
        {
            Price *= DISCOUNT_PERCENTAGE;
        }
    }
}
