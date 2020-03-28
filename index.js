const {ApolloServer, gql} = require("apollo-server");

const typeDefs = gql`
    type Query {
        greeting: String,
        interestingURLs: [String],
        firstName: String,
        email: String,
        pets: [String]
    }
`;

const data = {
    greeting: "Hello World!",
    interestingURLs: ["https://kursreacta.pl", "www.medium.com"],
    firstName: "John",
    email: "john@example.com",
    pets: ["Mittens", "Doggo", "Birb"]
}

const server = new ApolloServer({typeDefs, rootValue: data});

server.listen({port: 4000}).then((result) => console.log(result.url));
