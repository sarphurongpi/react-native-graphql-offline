const { gql } = require('apollo-server');

export const typeDefs = gql`
    scalar DateTime
    type Post {
        id: ID!
        text: String!
        createdAt: DateTime!
    }
    type Query {
        posts: [Post]!
    }
    type Mutation {
        createPost(text: String!): Post!
        deletePost(postId: ID!): Post!
    }
`