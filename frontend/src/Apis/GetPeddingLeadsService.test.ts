import { getPeddingLeads } from './GetPeddingLeadsService';

describe('GetPeddingLeadsService', () => {
  const mockResponse = [
    {
      id: '456',
      contactFirstName: 'Jane',
      suburb: 'Uptown',
      category: 'Electrical',
      dateCreated: '2025-06-05T11:00:00Z',
      description: 'Fix wiring',
      price: 200.00
    }
  ];

  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it('should fetch pending leads successfully', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse
    });

    const result = await getPeddingLeads();

    expect(global.fetch).toHaveBeenCalledWith('http://localhost:5225/leads', {
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

    await expect(getPeddingLeads()).rejects.toThrow('Failed to fetch pending leads');
  });

  it('should throw error when network error occurs', async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

    await expect(getPeddingLeads()).rejects.toThrow();
  });
});
