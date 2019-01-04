import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../common/App'
import express from 'express'
import graphqlHTTP from 'express-graphql'
import { buildSchema } from 'graphql';
import path from 'path'

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = {
  hello: () => {
    return 'Hello world!';
  },
};

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.use(express.static('assets'));

export default app