using Backend.Domain.Interfaces;

namespace Backend.Application.Queries
{
    public class GetPendingLeadsQueryHandler : IQueryHandler<GetPendingLeadsQuery, IEnumerable<LeadDto>>
    {
        private readonly ILeadRepository _repository;

        public GetPendingLeadsQueryHandler(ILeadRepository repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<LeadDto>> Handle(GetPendingLeadsQuery query)
        {
            var leads = await _repository.GetPendingLeadsAsync();
            return leads.Select(l => new LeadDto
            {
                ID = l.Id.ToString(),
                ContactFirstName = l.ContactName.Split(' ')[0],
                Suburb = l.Suburb,
                Category = l.Category,
                DateCreated = l.DateCreated,
                Description = l.Description,
                Price = l.Price
            });
        }
    }
}
