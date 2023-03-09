const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const authRoutes = require('./routes/authRoutes');
const passport = require('passport');
const cookieSession = require('cookie-session');

// GraphQL Stuff 
const { graphqlHTTP } = require('express-graphql')
const graphqlSchema = require('./graphql/graphqlSchema');
const resolvers = require('./graphql/resolvers');

// Connect to DB 
const connectDB = require('./config/DB');


const app = express();

// Image Upload 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'profiles');       
    }, 
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

// server file statically 
app.use(express.static(path.join(__dirname, 'profiles')));

// Filter File type 
const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

app.use(multer({
    dest: 'profiles', 
    storage,
    fileFilter
}).single('image'));

const PORT = process.env.PORT || 8000;


// Connect DB 
connectDB();

app.use('/upload/profile', (req, res, next) => {
    const img = req.file;
    if(!img) {
        res.status(422).json({msg: 'Invalid Image'})
    }
    console.log(img.path);
    next();
})


app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000, 
    keys: ['somerandomcookiekey']
}))

// initialize passport 
app.use(passport.initialize());
app.use(passport.session())


// Auth Routes 
app.use('/auth', authRoutes);

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


// app.use('/', (req, res) => {
//     res.render('photo');
// })


app.listen(PORT, () => console.log(`Server Running on ${PORT}`))