interface PeddingLeadDTO {
  id: string;
  contactFirstName: string;
  suburb: string;
  category: string;
  dateCreated: string;
  description: string;
  price: number;
}

export async function getPeddingLeads(): Promise<PeddingLeadDTO[]> {
  try {
    const response = await fetch('http://localhost:5225/leads', {
      headers: {
        'accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch pending leads');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching pending leads:', error);
    throw error;
  }
}

export type { PeddingLeadDTO };