using Backend.Application.Commands.AcceptLead;

namespace backend.UnitTests.Application.Commands.AcceptLead
{
    public class AcceptLeadCommandTests
    {
        [Fact]
        public void Constructor_ShouldSetLeadIdProperty()
        {
            // Arrange & Act
            int expectedLeadId = 42;
            var command = new AcceptLeadCommand(expectedLeadId);

            // Assert
            Assert.Equal(expectedLeadId, command.LeadId);
        }
    }
}
