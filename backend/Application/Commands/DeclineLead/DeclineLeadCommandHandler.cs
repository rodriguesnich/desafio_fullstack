using Backend.Domain.Interfaces;

namespace Backend.Application.Commands.DeclineLead
{
    public class DeclineLeadCommandHandler : ICommandHandler<DeclineLeadCommand, bool>
    {
        private readonly ILeadRepository _repository;

        public DeclineLeadCommandHandler(ILeadRepository repository)
        {
            _repository = repository;
        }

        public async Task<bool> Handle(DeclineLeadCommand command)
        {
            var lead = await _repository.GetByIdAsync(command.LeadId);
            if (lead == null)
            {
                return false;
            }

            lead.Decline();
            await _repository.UpdateAsync(lead);
            
            return true;
        }
    }
}
