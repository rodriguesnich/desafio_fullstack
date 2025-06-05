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
    }
}
