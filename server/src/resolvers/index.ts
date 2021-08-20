let { posts } = require("../data/data");
import { Post } from "../generated/graphql";

const { v4 : uuidv4 } = require('uuid')

const resolvers = {
    Query: {
        posts: () => {
            console.log("posts")
            return posts
        },
    },
    Mutation: {
        createPost: (parent, args, context, info) => {
            let newPost = {
                id: uuidv4(), 
                text: args.text,
                createdAt: new Date()
            }
            posts = [...posts, newPost]
            return newPost
        },
        deletePost: (parent, args, context, info) => {
            let deletedPost = posts.find((post: Post) => post.id === args.postId)
            posts = posts.filter((post: Post) => post.id !== args.postId)
            return deletedPost;
        }
    }
};

export default resolvers;