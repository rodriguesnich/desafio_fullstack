export async function declineLead(leadId: string): Promise<void> {
  try {
    const response = await fetch(`http://localhost:5225/lead/decline/${leadId}`, {
      method: 'POST',
      headers: {
        'accept': '*/*'
      }
    });

    if (!response.ok) {
      throw new Error('Failed to decline lead');
    }
  } catch (error) {
    console.error('Error declining lead:', error);
    throw error;
  }
}
