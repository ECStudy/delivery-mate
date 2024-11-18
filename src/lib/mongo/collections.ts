import { clientPromise, IParty, ITest } from '@/lib/mongo';

async function getMongo() {
  return clientPromise;
}

export const collection = {
  test: async () => (await getMongo()).db().collection<ITest>('test'),
  user: async () => (await getMongo()).db().collection('user'),
  party: async () => (await getMongo()).db().collection<IParty>('party'),
};
