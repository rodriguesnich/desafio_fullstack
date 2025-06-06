import { declineLead } from './DeclineLeadService';

describe('DeclineLeadService', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it('should decline a lead successfully', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true
    });

    await expect(declineLead('123')).resolves.not.toThrow();

    expect(global.fetch).toHaveBeenCalledWith(
      'http://localhost:5225/lead/decline/123',
      {
        method: 'POST',
        headers: {
          'accept': '*/*'
        }
      }
    );
  });

  it('should throw error when decline fails', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false
    });

    await expect(declineLead('123')).rejects.toThrow('Failed to decline lead');
  });

  it('should throw error when network error occurs', async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

    await expect(declineLead('123')).rejects.toThrow();
  });
});
