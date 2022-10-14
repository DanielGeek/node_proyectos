'use strict'

const { graphql, buildSchema } = require('graphql');

// defining schema
const schema = buildSchema(`
  type Query {
    hello: String
    greeting: String
  }
`)

// Configure resolvers
const resolvers = {
  hello: () => {
    return 'Hello World'
  },
  greeting: () => {
    return 'Hi everyone'
  }
}

// Execute query hello
graphql(schema, '{ greeting }', resolvers).then(( data ) => {
  console.log(data);
})