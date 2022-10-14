'use strict'

const { graphql, buildSchema } = require('graphql');

// defining schema
const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

graphql(schema, '{ hello }').then(( data ) => {
  console.log(data);
})