import { getAcceptedLeads } from './GetAcceptedLeadsService';

describe('GetAcceptedLeadsService', () => {
  const mockResponse = [
    {
      id: '123',
      category: 'Plumbing',
      contactFullName: 'John Doe',
      dateCreated: '2025-06-05T10:00:00Z',
      description: 'Fix leak',
      suburb: 'Downtown',
      price: 150.00,
      contactPhoneNumber: '1234567890',
      contactEmail: 'john@example.com'
    }
  ];

  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it('should fetch accepted leads successfully', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse
    });

    const result = await getAcceptedLeads();

    expect(global.fetch).toHaveBeenCalledWith('http://localhost:5225/leads/accepted', {
      headers: {
        'accept': 'application/json'
      }
    });
    expect(result).toEqual(mockResponse);
  });

  it('should throw error when fetch fails', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false
    });

    await expect(getAcceptedLeads()).rejects.toThrow('Failed to fetch accepted leads');
  });

  it('should throw error when network error occurs', async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

    await expect(getAcceptedLeads()).rejects.toThrow();
  });
});
