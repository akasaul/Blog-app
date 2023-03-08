const { buildSchema } = require('graphql')

module.exports = buildSchema(`
    type User {
        id: ID!
        name: String!
        email: String!
        password: String
        provider: String
        providerId: String
        posts: [Post]!
        favs: [Post]!, 
        liked: [Post!]
        followers: [User]!
        bio: String
        profileImg: String
        joinedAt: String
        token: String
    }

    type Post {
        id: ID!
        title: String!
        coverImage: String
        comments: [Comment]!
        postedBy: User!
    }


    type Comment {
        userId: ID!, 
        content: String!
    }


    type RootQuery {
        hello: String!
    }

    type RootMutation {
        signup(name: String, email: String, password: String, password2: String, bio: String): User!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`)