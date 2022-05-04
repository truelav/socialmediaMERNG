const { gql } = require('apollo-server')

module.exports = gql`
  type Post{
    id: ID!
    body: String!
    createdAt: String!
    username: String!
  }

  type User{
    id: ID!,
    username: String!,
    createdAt: String!,
    updatedAt: String!
  }

  type Query{
    sayHi: String!,
    getPosts: [Post],
    getUsers: [User]
  }

  type Mutation{
    register(registerInput: registerInput)
  }
`

// module.exports = {
//   typeDefs
// }