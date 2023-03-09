const router = require('express').Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const User = require('../models/user');


passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
})


passport.use(
    new GoogleStrategy({
        // options for the google strat 
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: 'http://localhost:5000/auth/google/redirect'
    },  async (accessToken, refreshToken, profile, done) => {
            //Passport Call back function
            const oldUser = await User.findOne({providerId: profile.id});

            if(oldUser) {
                // Already have the user
                console.log('Found Old User ', oldUser);
                done(null, oldUser);
            } else {
                // if not create user in our db 
                const newUser = await new User({
                    name: profile.displayName, 
                    email: profile.emails[0].value,
                    providerId: profile.id, 
                    provider: 'google',  
                    profileImg: profile._json.picture
                }).save();  
            console.log(profile);

                done(null, newUser);
            }
        }
    ),
)

router.get('/google', passport.authenticate('google', { 
    scope: ['https://www.googleapis.com/auth/userinfo.profile',
'https://www.googleapis.com/auth/userinfo.email'],
accessType: 'offline', approvalPrompt: 'force' }));

// Call back route for google to redirect to 
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect('/');
})

module.exports = router;