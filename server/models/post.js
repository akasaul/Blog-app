const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    coverImage: {
        type: String, 
    },
    comments: [
        {
            userId: {
                type: Schema.Types.ObjectId, 
                ref: 'User'
            },
            content: {
                type: String, 
                required: true
            }
        }
    ],
    postedBy: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    }
});



module.exports = mongoose.model('User', postSchema);