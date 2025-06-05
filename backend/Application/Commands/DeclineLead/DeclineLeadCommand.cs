namespace Backend.Application.Commands.DeclineLead
{
    public class DeclineLeadCommand : ICommand<bool>
    {
        public int LeadId { get; }

        public DeclineLeadCommand(int leadId)
        {
            LeadId = leadId;
        }
    }
}
