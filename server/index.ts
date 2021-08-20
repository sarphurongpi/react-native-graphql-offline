const { ApolloServer } = require('apollo-server');
import resolvers from './src/resolvers';
import { typeDefs } from './typeDefs';

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

  
