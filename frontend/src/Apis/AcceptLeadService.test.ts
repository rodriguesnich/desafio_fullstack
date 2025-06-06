import { acceptLead } from './AcceptLeadService';

describe('AcceptLeadService', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it('should accept a lead successfully', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true
    });

    await expect(acceptLead('123')).resolves.not.toThrow();

    expect(global.fetch).toHaveBeenCalledWith(
      'http://localhost:5225/lead/accept/123',
      {
        method: 'POST',
        headers: {
          'accept': '*/*'
        }
      }
    );
  });

  it('should throw error when accept fails', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false
    });

    await expect(acceptLead('123')).rejects.toThrow('Failed to accept lead');
  });

  it('should throw error when network error occurs', async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

    await expect(acceptLead('123')).rejects.toThrow();
  });
});
