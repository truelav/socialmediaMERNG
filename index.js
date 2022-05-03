const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose')

const typeDefs = require('./graphql/typeDefs')
const Post = require('./models/Post')
const User = require('./models/User')
const { MONGODB } = require('./config.js')



const resolvers = {
  Query: {
    async getPosts(){
      try {
        const posts = await Post.find()
        return posts
      } catch(error){
        throw new Error(error)
      }
    }
  },
  Query: {
    async getUsers(){
      try {
        const users = await User.find()
        return users
      } catch(error){
        throw new Error(error)
      }
    }
  }
}

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers
})

mongoose.connect(MONGODB, {useNewUrlParser: true})
  .then(() => {
    console.log('MongoDb Connected')
    server.listen({ port: 5000 })
  })
  .then(res => {
    console.log('Serve live at port 5000')
  })

//serghei
//esi7801
