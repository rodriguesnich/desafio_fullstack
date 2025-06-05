TODO:
- create list endpoints using cqrs [ ]

API:
- List Leads Accepted
- List Leads (not declined | accepted)
- Accept Lead
	- update status to accepted
	- if price > 500 apply discount
	- after that send a email to "vendas@test.com"
- Decline Lead
	- update status to declined
