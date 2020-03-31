const Quotes = require("inspirational-quotes");
let numberOfViews = 1;
let allArray = [];

const rootValue = () => {
    const today = new Date();
    const DAYS_OF_WEEK = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const MONTHS = [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC"
    ];
    const CardinalDirection = ["NORTH", "EAST", "WEST", "SOUTH"];

    const getRandomDiceThrow = sides => Math.ceil(Math.random() * sides);
    const countNumberOfViews = () => (numberOfViews++);

    const setNullInArray = () => {
        const firstOptionTable = [null, 2, 3];
        const secondOptionTable = [1, null, 3];
        const thirdOptionTable = [1, 2, null];
        if (numberOfViews % 3 === 1) {
            return firstOptionTable;
        }
        if (numberOfViews % 3 === 2) {
            return secondOptionTable;
        } else {
            return thirdOptionTable;
        }
    }

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

    const numberInArray = () => {
        let arrayToReturn = [];
        for (let i = 1; i < numberOfViews - 2; i++) {
            arrayToReturn.push(i)
        }
        return arrayToReturn;
    };

    const setArrayIntoArray = () => {
        if (numberOfViews > 2) {
            allArray.unshift(numberInArray());
        }
        return allArray
    };

    function getFewRandomQuotes() {
        const minimalNumber = 3;
        const maximalNumber = 5;
        const numberOfQuotes = Math.floor(Math.random() * (maximalNumber - minimalNumber + 1)) + minimalNumber;
        let arrayWithQuotes = [];
        for (let i = 1; i <= numberOfQuotes; i++) {
            let tempQuote = {
                text: Quotes.getQuote().text,
                author: Quotes.getQuote().author
            }
            arrayWithQuotes.push(tempQuote)
        }
        return arrayWithQuotes
    }

    function getCurrentTime() {
        const now = new Date();
        return {
            date: {
                year: now.getFullYear(),
                month: MONTHS[now.getMonth()],
                day: now.getDate(),
                weekDay: DAYS_OF_WEEK[now.getDay()],
            },
            time: {
                hour: now.getHours(),
                minute: now.getMinutes(),
                second: now.getSeconds(),
            }
        };
    }

    return {
        greeting: "Hello World!",
        interestingURLs: ["https://kursreacta.pl", "https://www.medium.com"],
        firstName: "John",
        email: "john@example.com",
        pets: ["Mittens", "Doggo", "Birb"],
        randomDiceThrow: getRandomDiceThrow(6),
        numberOfViews: countNumberOfViews,
        fewRandomDiceThrows: getFewRandomDiceThrows(),
        pi: Math.PI,
        isTodayFriday: today.getDay() === 5,
        randomCoinTossesUntilTrue: getRandomCoinTossesUntilTrue(),
        e: Math.E,
        eulersSeries: getEulerSeries(),
        today: DAYS_OF_WEEK[today.getDay()],
        workdays: DAYS_OF_WEEK.slice(1, 6),
        unpredicTableB: setNullInArray(),
        unpredicTableC: setArrayIntoArray,
        fewRandomQuotes: getFewRandomQuotes(),
        now: getCurrentTime(),
        direction: "NORTH",
        yourLastSalary: 2500,
    };
}

module.exports = rootValue;