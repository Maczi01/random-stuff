const {ApolloServer, gql} = require("apollo-server");

const typeDefs = gql`
    type Query {
        greeting: String,
        interestingURLs: [String]
    }
`;

const data = {
    greeting: "Hello World!",
    interestingURLs: ["https://kursreacta.pl", "www.medium.com"]
}

const server = new ApolloServer({typeDefs, rootValue:data});

server.listen({port: 4000}).then((result) => console.log(result.url));
