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
    email: String!
    token: String!
    username: String!,
    createdAt: String!,
    updatedAt: String!
  }

  type Query{
    getSinglePost(postId: ID!): Post
    getPosts: [Post]
    getUsers: [User]
  }

  input RegisterInput{
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }

  type Mutation{
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createPost(body: String!): Post!
    deletePost(postId: ID!): String!
  }
`
