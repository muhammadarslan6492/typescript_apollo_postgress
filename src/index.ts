import { ApolloServer } from 'apollo-server';
import { schema } from './schema';

const boot = () => {
  const server = new ApolloServer({ schema });
  server
    .listen(500)
    .then(({ url }) => {
      console.log(`server running on ${url}`);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

boot();
