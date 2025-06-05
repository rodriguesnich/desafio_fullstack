using Backend.Domain.Interfaces;

namespace Backend.Application.Queries
{
    public class GetAcceptedLeadsQueryHandler : IQueryHandler<GetAcceptedLeadsQuery, IEnumerable<AcceptedLeadDto>>
    {
        private readonly ILeadRepository _repository;

        public GetAcceptedLeadsQueryHandler(ILeadRepository repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<AcceptedLeadDto>> Handle(GetAcceptedLeadsQuery query)
        {
            var leads = await _repository.GetAcceptedLeadsAsync();
            return leads.Select(l => new AcceptedLeadDto
            {
                Id = l.Id,
                ContactFullName = l.ContactName,
                Suburb = l.Suburb,
                Category = l.Category,
                DateCreated = l.DateCreated,
                Description = l.Description,
                Price = l.Price,
                ContactPhoneNumber = l.ContactPhoneNumber,
                ContactEmail = l.ContactEmail
            });
        }
    }
}
