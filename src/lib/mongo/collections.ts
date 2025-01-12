import {
  clientPromise,
  IAuthentication,
  ICategories,
  IParty,
  IRestaurants,
  ITest,
  IUser,
} from '@/lib/mongo';

async function getMongo() {
  return clientPromise;
}

export const collection = {
  test: async () => (await getMongo()).db().collection<ITest>('test'),
  user: async () => (await getMongo()).db().collection<IUser>('user'),
  authentication: async () =>
    (await getMongo()).db().collection<IAuthentication>('authentication'),
  party: async () => (await getMongo()).db().collection<IParty>('party'),
  restaurants: async () =>
    (await getMongo()).db().collection<IRestaurants>('restaurants'),
  categories: async () =>
    (await getMongo()).db().collection<ICategories>('categories'),
};
