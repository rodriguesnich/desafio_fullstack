using Backend.Application.Commands.DeclineLead;

namespace backend.UnitTests.Application.Commands.DeclineLead
{
    public class DeclineLeadCommandTests
    {
        [Fact]
        public void Constructor_ShouldSetLeadIdProperty()
        {
            // Arrange & Act
            int expectedLeadId = 42;
            var command = new DeclineLeadCommand(expectedLeadId);

            // Assert
            Assert.Equal(expectedLeadId, command.LeadId);
        }
    }
}
