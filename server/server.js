const express = require('express');
require('dotenv').config();

const { graphqlHTTP } = require('express-graphql')
const graphqlSchema = require('./graphql/graphqlSchema');
const resolvers = require('./graphql/resolvers');

const connectDB = require('./config/DB');

const app = express();

const PORT = process.env.PORT || 8000;

connectDB();

// const fileFilter = (req, esq, )

// app.put('/post-profile', (req, res) => {
//     if(!req.fil)
// })

app.use('/graphql', graphqlHTTP({
    schema:  graphqlSchema, 
    rootValue: resolvers,
    graphiql: process.env.NODE_ENV === 'development',
    formatError: (err) => {
        if(!err.originalError) {
            return err;
        }

        // errors array passed as data
        const data = err.originalError.data;
            
        //Message when Thrown
        const message = err.message || 'An Error ocurred'; 
        const code = err.originalError.code || 500;

        return {data, message, status: code}
    }
}))

app.listen(PORT, () => console.log(`Server Running on ${PORT}`))