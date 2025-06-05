using Backend.Domain.Interfaces;

namespace Backend.Application.Commands.AcceptLead
{
    public class AcceptLeadCommandHandler : ICommandHandler<AcceptLeadCommand, bool>
    {
        private readonly ILeadRepository _repository;
        private readonly IEmailService _emailService;

        public AcceptLeadCommandHandler(ILeadRepository repository, IEmailService emailService)
        {
            _repository = repository;
            _emailService = emailService;
        }

        public async Task<bool> Handle(AcceptLeadCommand command)
        {
            var lead = await _repository.GetByIdAsync(command.LeadId);
            if (lead == null)
            {
                return false;
            }

            lead.Accept();
            await _repository.UpdateAsync(lead);
            await _emailService.SendAcceptanceEmailAsync(lead);
            
            return true;
        }
    }
}
