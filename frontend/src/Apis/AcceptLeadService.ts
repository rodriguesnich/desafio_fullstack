export async function acceptLead(leadId: string): Promise<void> {
  try {
    const response = await fetch(`http://localhost:5225/lead/accept/${leadId}`, {
      method: 'POST',
      headers: {
        'accept': '*/*'
      }
    });

    if (!response.ok) {
      throw new Error('Failed to accept lead');
    }
  } catch (error) {
    console.error('Error accepting lead:', error);
    throw error;
  }
}
