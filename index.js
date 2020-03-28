const {ApolloServer, gql} = require("apollo-server");
const PORT = process.env.PORT || 4000
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

server.listen({port: PORT}).then((result) => console.log(result.url));
