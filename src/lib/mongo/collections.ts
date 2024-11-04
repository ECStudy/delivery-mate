import { clientPromise, ITest } from '@/lib/mongo';

async function getMongo() {
  return clientPromise;
}

export const collection = {
  test: async () => (await getMongo()).db().collection<ITest>('test'),
};
