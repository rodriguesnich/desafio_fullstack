import { render, screen, waitFor } from '@testing-library/react';
import PeddingLeadsView from './index';
import { getPeddingLeads } from '../../Apis/GetPeddingLeadsService';

jest.mock('../../Apis/GetPeddingLeadsService');

describe('PeddingLeadsView', () => {
  const mockLeads = [
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
    (getPeddingLeads as jest.Mock).mockReset();
  });

  it('should render pending leads successfully', async () => {
    (getPeddingLeads as jest.Mock).mockResolvedValueOnce(mockLeads);

    render(<PeddingLeadsView />);

    await waitFor(() => {
      expect(screen.getByText('Jane')).toBeInTheDocument();
      expect(screen.getByText(/Uptown/)).toBeInTheDocument();
      expect(screen.getByText(/Electrical/)).toBeInTheDocument();
      expect(screen.getByText('Fix wiring')).toBeInTheDocument();
      expect(screen.getByText(/\$200\.00/)).toBeInTheDocument();
      expect(screen.getByText(/Accept/)).toBeInTheDocument();
      expect(screen.getByText(/Decline/)).toBeInTheDocument();
    });
  });

  it('should show error message when api call fails', async () => {
    (getPeddingLeads as jest.Mock).mockRejectedValueOnce(new Error('API Error'));

    render(<PeddingLeadsView />);

    await waitFor(() => {
      expect(screen.getByText('Failed to load pending leads')).toBeInTheDocument();
    });
  });

  it('should render empty state when no leads', async () => {
    (getPeddingLeads as jest.Mock).mockResolvedValueOnce([]);

    render(<PeddingLeadsView />);

    await waitFor(() => {
      expect(screen.queryByRole('article')).not.toBeInTheDocument();
    });
  });
});
