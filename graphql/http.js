const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const root = require('./root');

const http = graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
});

module.export = http;