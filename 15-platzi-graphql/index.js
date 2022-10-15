'use strict'

const { buildSchema } = require('graphql')
const express = require('express')
const gqlMiddleware = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./lib/resolvers')

const app = express()
const port = process.env.port || 3000

// defining schema
const schema = buildSchema(readFileSync(join(__dirname, 'lib', 'schema.graphql'), 'utf-8'))

app.use('/api', gqlMiddleware({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`)
})

// Execute query hello
// graphql(schema, '{ greeting }', resolvers).then(( data ) => {
//   console.log(data);
// })
