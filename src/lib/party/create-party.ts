import { fetcher } from '@/lib/fetcher';
import { NewParty } from '@/lib/validator/party';

export async function createParty(
  partyData: Omit<NewParty, 'member'>,
): Promise<any> {
  try {
    const response = await fetcher.post('/api/party', { party: partyData });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to create party');
    }

    const data: any = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating party:', error);
    throw error;
  }
}
