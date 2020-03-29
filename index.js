const {ApolloServer, gql} = require("apollo-server");
const PORT = process.env.PORT || 4000;
let numberOfViews = 0;
const typeDefs = gql`
    type Query {
        greeting: String
        interestingURLs: [String]
        firstName: String
        email: String
        pets: [String]
        randomDiceThrow: Int
        numberOfViews: Int
        fewRandomDiceThrows: [Int]
        pi: Float
        isTodayFriday: Boolean
        randomCoinTossesUntilTrue: [Boolean]
        e: Float
        eulersSeries: [Float]
    }
`;

function rootValue() {
    const today = new Date();
    const getRandomDiceThrow = sides => Math.ceil(Math.random() * sides);
    const countNumberOfViews = () => (numberOfViews++);
    const getFewRandomDiceThrows = () => {
        const minimalNumber = 3;
        const maximalNumber = 7;
        let sides = 6;
        const numberOfThrows = Math.floor(Math.random() * (maximalNumber - minimalNumber + 1)) + minimalNumber;
        let arrayOfResults = [];
        for (let i = 0; i < numberOfThrows; i++) {
            let randomNumber = Math.ceil(Math.random() * sides);
            arrayOfResults.push(randomNumber);
        }
        return arrayOfResults;
    };
    const randomCoinToss = () => Math.random() >= 0.5;
    const getRandomCoinTossesUntilTrue = () => {
        const result = [];
        do {
            result.push(randomCoinToss());
        } while (!result[result.length - 1]);
        return result;
    };

    const getEulerSeries = () => {
        const result = [];
        const valueForGivenNumber = (n) => Math.pow((1 + (1 / n)), n);
        for (let i = 1; i <= 1000; i++) {
            result.push(valueForGivenNumber(i))
        }
        return result;
    };

    return {
        greeting: "Hello World!",
        interestingURLs: ["https://kursreacta.pl", "www.medium.com"],
        firstName: "John",
        email: "john@example.com",
        pets: ["Mittens", "Doggo", "Birb"],
        randomDiceThrow: getRandomDiceThrow(6),
        numberOfViews: countNumberOfViews(),
        fewRandomDiceThrows: getFewRandomDiceThrows(),
        pi: Math.PI,
        isTodayFriday: today.getDay() === 5,
        randomCoinTossesUntilTrue: getRandomCoinTossesUntilTrue(),
        e: Math.E,
        eulersSeries: getEulerSeries(),
    };
}

const server = new ApolloServer({typeDefs, rootValue, playground: true, introspection: true});

server.listen({port: PORT}).then((result) => console.log(result.url));
