const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validator = require('validator');
const User = require('../models/user');

module.exports = {
    
    hello: (args, req) => {
        return 'Hi My Name is Whaat?'
    },

    signup: async ({name, email, password, password2, bio}, req) =>  {

        const errors = [];

        // check for mandatory fields         
        if(!name || !email || !password || !password2) {
            errors.push({msg: 'Please Provide the required Fields'})
        }

        // check confirmation passwords 
        if(password !== password2) {
            errors.push({msg: 'passwords do not match'})
        }

        // Check if valid email 

        if(!validator.isEmail(email)) {
            errors.push({msg: 'Please use valid email'})
        }


        // check valid name 
        if(!validator.isLength(name, {min: 5})) {
            errors.push({msg: 'name should be more than 5 characters'})
        }


        // check valid password 
        if(!validator.isLength(password, {min: 5})) {
            errors.push({msg: 'Password should be more than 5 characters'})
        }

        if(errors.length > 0) {
            const error = new Error('An Error occured');
            error.data = errors;
            error.code = 422
            throw error;
        }

        const oldUser = await User.findOne({ email });

        if(oldUser) {
            const error = new Error('An Error occured');
            error.data = [{msg: 'Email Already Found'}];
            error.code = 422
            throw error;
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name, 
            email, 
            password: hashedPassword, 
            bio
        })


        const token = await jwt.sign({id: user.id, name: user.name, password: user.password}, 
            process.env.JWT_SECRET ,{
            expiresIn: '7d'
        });
        
        return {...user._doc, id: user.id.toString(), token}
    }
}