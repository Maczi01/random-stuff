const {gql} = require("apollo-server");

const typeDefs = gql`
    type Query {
        """
        A simple greeting. For example:
        **Greeting from moon!**
        """
        greeting: String!
        """
        Do not feel obliged to click on them. Although they are interesting.
        _Easy. Only safe links_
        """
        interestingURLs: [String!]!
        """Your first name"""
        firstName: String!
        """Your official mail"""
        email: String
        "List of your pets"
        pets: [String!]!
        """
        Result of a 6-sided dice throw. Returns a random number between **1** and **6**.
        One who doesn't throw the dice *can never expect* to score a six.
        """
        randomDiceThrow: Int!
        "Information about nomberof views on this site"
        numberOfViews: Int!
        """
        Result of a 6-sided dice throws - form 3 to 7. Returns a list with random numbers between **1** and **6**.
        """
        fewRandomDiceThrows: [Int!]!
        """
        A pi constant.
        """
        pi: Float!
        """
        Info about is friday today, or not
        """
        isTodayFriday: Boolean!
        """
        Toss a coin. Returns true or false
        """
        randomCoinTossesUntilTrue: [Boolean!]!
        """
        Euler number
        """
        e: Float!
        eulersSeries: [Float!]!
        """
        Name of today
        """
        today: DayOfWeek!
        """
        List day from monday to friday
        """
        workdays: [DayOfWeek]
        """
        List numbers from 1 to 3, but one of them is null
        """
        unpredicTableB: [Int]!
        """
        List of numer math equation
        """
        unpredicTableC: [[Int!]!]!
        """
        List of few inspiring quotes
        """
        fewRandomQuotes: [RandomQuote!]!
        """
        Just date
        """
        date: Date!
        """
        Just time
        """
        time: Time!
        """
        Just date and time
        """
        dateTime: DateTime!
        """
        Return date and time for now moment
        """
        now: DateTime!
        """
        One of direction from compass
        """
        direction: CardinalDirection!
        """
        Info about how many you earn in last month
        """
        yourLastSalary: Int!
    }

    type Date {
        year: Int!
        month: Month!
        day: Int!
        weekDay: DayOfWeek!
    }
    type Time {
        hour: Int!
        minute:Int
        second: Int!
    }

    type DateTime {
        date: Date
        time: Time
    }
    type RandomQuote{
        text: String!
        author: String!
    }
    enum DayOfWeek {
        MON
        TUE
        WED
        THU
        SAT
        FRI
        SUN
    }
    enum Month {
        JAN
        FEB
        MAR
        APR
        MAY
        JUN
        JUL
        AUG
        SEP
        OCT
        NOV
        DEC
    }

    enum CardinalDirection{
        NORTH
        EAST
        WEST
        SOUTH
    }
`;

module.exports = typeDefs