interface AcceptedLeadDTO {
  id: string;
  contactFullName: string;
  suburb: string;
  category: string;
  dateCreated: string;
  description: string;
  price: number;
  contactPhoneNumber: string;
  contactEmail: string;
}

export async function getAcceptedLeads(): Promise<AcceptedLeadDTO[]> {
  try {
    const response = await fetch('http://localhost:5225/leads/accepted', {
      headers: {
        'accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch accepted leads');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching accepted leads:', error);
    throw error;
  }
}

export type { AcceptedLeadDTO };