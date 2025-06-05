using Backend.Domain.Entities;

namespace backend.UnitTests.Domain.Entities
{
    public class LeadTests
    {
        [Fact]
        public void Decline_ShouldSetStatusToDeclined()
        {
            // Arrange
            var lead = new Lead { Status = "pending" };

            // Act
            lead.Decline();

            // Assert
            Assert.Equal("declined", lead.Status);
        }

        [Fact]
        public void Accept_ShouldSetStatusToAccepted()
        {
            // Arrange
            var lead = new Lead { Status = "pending" };

            // Act
            lead.Accept();

            // Assert
            Assert.Equal("accepted", lead.Status);
        }

        [Fact]
        public void Accept_ShouldApplyDiscount_WhenLeadIsHighValue()
        {
            // Arrange
            var lead = new Lead { 
                Status = "pending", 
                Price = 600m // Above the 500m threshold
            };
            var originalPrice = lead.Price;

            // Act
            lead.Accept();

            // Assert
            Assert.Equal("accepted", lead.Status);
            Assert.Equal(originalPrice * 0.9m, lead.Price); // 10% discount applied
        }

        [Fact]
        public void Accept_ShouldNotApplyDiscount_WhenLeadIsNotHighValue()
        {
            // Arrange
            var lead = new Lead { 
                Status = "pending", 
                Price = 400m // Below the 500m threshold
            };
            var originalPrice = lead.Price;

            // Act
            lead.Accept();

            // Assert
            Assert.Equal("accepted", lead.Status);
            Assert.Equal(originalPrice, lead.Price); // No discount applied
        }
    }
}
