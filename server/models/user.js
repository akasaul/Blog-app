const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true, 
    },
    password: {
        type: String
    },
    provider: {
        type: String, 
        enum: ['google']
    },
    providerId: {
        type: String
    },
    posts: [
        {
            type: Schema.Types.ObjectId, 
            ref: 'Post'
        }
    ],
    favs: [
        {
            type: Schema.Types.ObjectId, 
            ref: 'Post'
        }
    ],
    liked: [
        {
            type: Schema.Types.ObjectId, 
            ref: 'Post'
        }
    ],
    followers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    bio: String, 

    joinedAt: {
        type: String, 
        default: Date.now()
    }, 

    profileImg: {
        type: String
    }
});



module.exports = mongoose.model('User', userSchema);