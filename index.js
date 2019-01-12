const express = require('express');
const path = require('path');
const http = require('./graphql/http');
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql/schema');
const root = require('./graphql/root');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

const port = process.env.PORT || 5000;
app.listen(port);