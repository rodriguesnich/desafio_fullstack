using Moq;
using Backend.Domain.Entities;
using Backend.Domain.Interfaces;
using Backend.Application.Commands.DeclineLead;

namespace backend.UnitTests.Application.Commands.DeclineLead
{
    public class DeclineLeadCommandHandlerTests
    {
        private readonly Mock<ILeadRepository> _mockRepository;
        private readonly DeclineLeadCommandHandler _handler;

        public DeclineLeadCommandHandlerTests()
        {
            _mockRepository = new Mock<ILeadRepository>();
            _handler = new DeclineLeadCommandHandler(_mockRepository.Object);
        }

        [Fact]
        public async Task Handle_ShouldReturnFalse_WhenLeadNotFound()
        {
            // Arrange
            var command = new DeclineLeadCommand(1);
            _mockRepository.Setup(r => r.GetByIdAsync(1)).ReturnsAsync((Lead?)null);

            // Act
            var result = await _handler.Handle(command);

            // Assert
            Assert.False(result);
            _mockRepository.Verify(r => r.GetByIdAsync(1), Times.Once);
            _mockRepository.Verify(r => r.UpdateAsync(It.IsAny<Lead>()), Times.Never);
        }

        [Fact]
        public async Task Handle_ShouldDeclineLead_AndReturnTrue_WhenLeadExists()
        {
            // Arrange
            var leadId = 1;
            var lead = new Lead { Id = leadId, Status = "pending" };
            var command = new DeclineLeadCommand(leadId);
            
            _mockRepository.Setup(r => r.GetByIdAsync(leadId)).ReturnsAsync(lead);
            _mockRepository.Setup(r => r.UpdateAsync(It.IsAny<Lead>())).Returns(Task.CompletedTask);

            // Act
            var result = await _handler.Handle(command);

            // Assert
            Assert.True(result);
            Assert.Equal("declined", lead.Status);
            _mockRepository.Verify(r => r.GetByIdAsync(leadId), Times.Once);
            _mockRepository.Verify(r => r.UpdateAsync(lead), Times.Once);
        }
    }
}
