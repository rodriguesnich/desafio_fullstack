import { LeadsAdapter } from './LeadsAdapter';
import { AcceptedLeadDTO } from '../Apis/GetAcceptedLeadsService';
import { PeddingLeadDTO } from '../Apis/GetPeddingLeadsService';

describe('LeadsAdapter', () => {
  describe('toAcceptedLeadCard', () => {
    it('should transform AcceptedLeadDTO to AcceptedLeadCardProps correctly', () => {
      const dto: AcceptedLeadDTO = {
        id: '123',
        category: 'Plumbing',
        contactFullName: 'John Doe',
        dateCreated: '2025-06-05T10:00:00Z',
        description: 'Fix leak',
        suburb: 'Downtown',
        price: 150.00,
        contactPhoneNumber: '1234567890',
        contactEmail: 'john@example.com'
      };

      const result = LeadsAdapter.toAcceptedLeadCard(dto);

      expect(result).toEqual({
        ID: '123',
        Category: 'Plumbing',
        ContactFullName: 'John Doe',
        DateCreated: new Date('2025-06-05T10:00:00Z'),
        Description: 'Fix leak',
        Suburb: 'Downtown',
        Price: 150.00,
        ContactPhoneNumber: '1234567890',
        ContactEmail: 'john@example.com'
      });
    });
  });

  describe('toPeddingLeadCard', () => {
    it('should transform PeddingLeadDTO to PeddingLeadCardProps correctly', () => {
      const dto: PeddingLeadDTO = {
        id: '456',
        contactFirstName: 'Jane',
        suburb: 'Uptown',
        category: 'Electrical',
        dateCreated: '2025-06-05T11:00:00Z',
        description: 'Fix wiring',
        price: 200.00
      };

      const result = LeadsAdapter.toPeddingLeadCard(dto);

      expect(result).toEqual({
        ID: '456',
        ContactFirstName: 'Jane',
        Suburb: 'Uptown',
        Category: 'Electrical',
        DateCreated: new Date('2025-06-05T11:00:00Z'),
        Description: 'Fix wiring',
        Price: 200.00
      });
    });
  });
});
