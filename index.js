const {ApolloServer} = require("apollo-server");
const PORT = process.env.PORT || 4000;
const typeDefs = require("./typeDefs");
const rootValue = require("./rootValue")

const server = new ApolloServer({typeDefs, rootValue, playground: true, introspection: true});

server.listen({port: PORT}).then((result) => console.log(result.url));
