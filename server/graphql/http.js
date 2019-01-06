import graphqlHTTP from 'express-graphql';
import { schema } from './schema';
import { root } from './root';

export const http = graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
});