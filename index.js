const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose')

const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')
const { MONGODB } = require('./config.js')

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  context: ({ req }) => ({ req })
})

mongoose
  .connect(MONGODB, {useNewUrlParser: true})
  .then(() => {
    console.log('MongoDb Connected')
    server.listen({ port: 5000 })
  })
  .then(res => {
    console.log('Serve live at port 5000')
  })
