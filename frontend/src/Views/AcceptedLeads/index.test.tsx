import { render, screen, waitFor } from '@testing-library/react';
import AcceptedLeadsView from './index';
import { getAcceptedLeads } from '../../Apis/GetAcceptedLeadsService';

jest.mock('../../Apis/GetAcceptedLeadsService');

describe('AcceptedLeadsView', () => {
  const mockLeads = [
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
    (getAcceptedLeads as jest.Mock).mockReset();
  });

  it('should render accepted leads successfully', async () => {
    (getAcceptedLeads as jest.Mock).mockResolvedValueOnce(mockLeads);

    render(<AcceptedLeadsView />);

    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText(/Downtown/)).toBeInTheDocument();
      expect(screen.getByText(/Plumbing/)).toBeInTheDocument();
      expect(screen.getByText('Fix leak')).toBeInTheDocument();
      expect(screen.getByText(/\$150\.00/)).toBeInTheDocument();
      expect(screen.getByText(/1234567890/)).toBeInTheDocument();
      expect(screen.getByText(/john@example\.com/)).toBeInTheDocument();
    });
  });

  it('should show error message when api call fails', async () => {
    (getAcceptedLeads as jest.Mock).mockRejectedValueOnce(new Error('API Error'));

    render(<AcceptedLeadsView />);

    await waitFor(() => {
      expect(screen.getByText('Failed to load accepted leads')).toBeInTheDocument();
    });
  });

  it('should render empty state when no leads', async () => {
    (getAcceptedLeads as jest.Mock).mockResolvedValueOnce([]);

    render(<AcceptedLeadsView />);

    await waitFor(() => {
      expect(screen.queryByRole('article')).not.toBeInTheDocument();
    });
  });
});
