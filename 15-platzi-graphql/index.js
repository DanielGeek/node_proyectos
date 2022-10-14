'use strict'

const { graphql, buildSchema } = require('graphql');
const express = require('express');
const gqlMiddleware = require('express-graphql');

const app = express();
const port = process.env.port || 3000;

// defining schema
const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

// Configure resolvers
const resolvers = {
  hello: () => {
    return 'Hello World'
  }
}

app.use('/api', gqlMiddleware({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`);
})

// Execute query hello
// graphql(schema, '{ greeting }', resolvers).then(( data ) => {
//   console.log(data);
// })