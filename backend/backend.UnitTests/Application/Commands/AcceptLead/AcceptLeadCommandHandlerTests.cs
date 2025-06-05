using Backend.Domain.Entities;
using Backend.Domain.Interfaces;
using Backend.Application.Commands.AcceptLead;

namespace backend.UnitTests.Application.Commands.AcceptLead
{
    public class AcceptLeadCommandHandlerTests
    {
        private readonly Mock<ILeadRepository> _mockRepository;
        private readonly Mock<IEmailService> _mockEmailService;
        private readonly AcceptLeadCommandHandler _handler;

        public AcceptLeadCommandHandlerTests()
        {
            _mockRepository = new Mock<ILeadRepository>();
            _mockEmailService = new Mock<IEmailService>();
            _handler = new AcceptLeadCommandHandler(_mockRepository.Object, _mockEmailService.Object);
        }

        [Fact]
        public async Task Handle_ShouldReturnFalse_WhenLeadNotFound()
        {
            // Arrange
            var command = new AcceptLeadCommand(1);
            _mockRepository.Setup(r => r.GetByIdAsync(1)).ReturnsAsync((Lead?)null);

            // Act
            var result = await _handler.Handle(command);

            // Assert
            Assert.False(result);
            _mockRepository.Verify(r => r.GetByIdAsync(1), Times.Once);
            _mockRepository.Verify(r => r.UpdateAsync(It.IsAny<Lead>()), Times.Never);
            _mockEmailService.Verify(e => e.SendAcceptanceEmailAsync(It.IsAny<Lead>()), Times.Never);
        }

        [Fact]
        public async Task Handle_ShouldAcceptLead_SendEmail_AndReturnTrue_WhenLeadExists()
        {
            // Arrange
            var leadId = 1;
            var lead = new Lead { Id = leadId, Status = "pending", Price = 200m };
            var command = new AcceptLeadCommand(leadId);
            
            _mockRepository.Setup(r => r.GetByIdAsync(leadId)).ReturnsAsync(lead);
            _mockRepository.Setup(r => r.UpdateAsync(It.IsAny<Lead>())).Returns(Task.CompletedTask);
            _mockEmailService.Setup(e => e.SendAcceptanceEmailAsync(It.IsAny<Lead>())).Returns(Task.CompletedTask);

            // Act
            var result = await _handler.Handle(command);

            // Assert
            Assert.True(result);
            Assert.Equal("accepted", lead.Status);
            _mockRepository.Verify(r => r.GetByIdAsync(leadId), Times.Once);
            _mockRepository.Verify(r => r.UpdateAsync(lead), Times.Once);
            _mockEmailService.Verify(e => e.SendAcceptanceEmailAsync(lead), Times.Once);
        }

        [Fact]
        public async Task Handle_ShouldApplyDiscount_WhenLeadIsHighValue()
        {
            // Arrange
            var leadId = 1;
            var lead = new Lead { Id = leadId, Status = "pending", Price = 600m };
            var command = new AcceptLeadCommand(leadId);
            var expectedDiscountedPrice = lead.Price * 0.9m; // 10% discount
            
            _mockRepository.Setup(r => r.GetByIdAsync(leadId)).ReturnsAsync(lead);
            _mockRepository.Setup(r => r.UpdateAsync(It.IsAny<Lead>())).Returns(Task.CompletedTask);
            _mockEmailService.Setup(e => e.SendAcceptanceEmailAsync(It.IsAny<Lead>())).Returns(Task.CompletedTask);

            // Act
            var result = await _handler.Handle(command);

            // Assert
            Assert.True(result);
            Assert.Equal("accepted", lead.Status);
            Assert.Equal(expectedDiscountedPrice, lead.Price);
            _mockRepository.Verify(r => r.UpdateAsync(lead), Times.Once);
            _mockEmailService.Verify(e => e.SendAcceptanceEmailAsync(lead), Times.Once);
        }
    }
}
