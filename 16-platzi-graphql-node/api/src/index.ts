import { ApolloServer } from 'apollo-server'
import path from 'path'
import { readFileSync } from 'fs'
import resolvers from './resolvers'
import { PrismaClient } from '@prisma/client'

const orm = new PrismaClient()

const typeDefs = readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    orm,
  }
})

server.listen().then(({ url }) => console.log(`Server is running on ${url}`))