const gql = require('graphql-tag')

const typeDefs = gql`
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
`

module.exports = {
  typeDefs
}