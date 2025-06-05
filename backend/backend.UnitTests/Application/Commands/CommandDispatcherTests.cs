using Microsoft.Extensions.DependencyInjection;
using Backend.Application.Commands;
using Backend.Application.Commands.DeclineLead;

namespace backend.UnitTests.Application.Commands
{
    public class CommandDispatcherTests
    {
        [Fact]
        public async Task Dispatch_ShouldResolveHandlerAndCallHandle()
        {
            // Arrange
            var mockHandler = new Mock<ICommandHandler<DeclineLeadCommand, bool>>();
            mockHandler.Setup(h => h.Handle(It.IsAny<DeclineLeadCommand>()))
                .ReturnsAsync(true);

            var services = new ServiceCollection();
            services.AddScoped<ICommandHandler<DeclineLeadCommand, bool>>(sp => mockHandler.Object);
            
            var serviceProvider = services.BuildServiceProvider();
            var dispatcher = new CommandDispatcher(serviceProvider);
            
            var command = new DeclineLeadCommand(1);

            // Act
            var result = await dispatcher.Dispatch<DeclineLeadCommand, bool>(command);

            // Assert
            Assert.True(result);
            mockHandler.Verify(h => h.Handle(command), Times.Once);
        }
    }
}
