import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../common/App'
import express from 'express'
import graphqlHTTP from 'express-graphql'
import { buildSchema } from 'graphql';

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

app.get('*', (req,res) => {
    let application = renderToString(<App />)
    let html = `<!doctype html>
    <html class="no-js" lang="">
        <head>
            <meta charset="utf-8">
            <meta http-equiv="x-ua-compatible" content="ie=edge">
            <title>HMR all the things!</title>
            <meta name="description" content="">
            <meta name="viewport" 
            content="width=device-width,  initial-scale=1">
        </head>
        <body>
            <div id="root">${application}</div>
        </body>
        <script src="http://localhost:3001/client.js"></script>
    </html>`
res.send(html)
})

export default app