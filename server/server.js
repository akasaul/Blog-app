const express = require('express');
require('dotenv').config();

const { graphqlHTTP } = require('express-graphql')
const graphqlSchema = require('./graphql/graphqlSchema');
const resolvers = require('./graphql/resolvers');

const connectDB = require('./config/DB');

const app = express();

const PORT = process.env.PORT || 8000;

connectDB();

app.use('/graphql', graphqlHTTP({
    schema:  graphqlSchema, 
    rootValue: resolvers,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(PORT, () => console.log(`Server Running on ${PORT}`))