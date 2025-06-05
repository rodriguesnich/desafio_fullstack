namespace Backend.Application.Commands.AcceptLead
{
    public class AcceptLeadCommand : ICommand<bool>
    {
        public int LeadId { get; }

        public AcceptLeadCommand(int leadId)
        {
            LeadId = leadId;
        }
    }
}
