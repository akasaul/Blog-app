const mongoose = require('mongoose');

module.exports = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected')
    } catch(err) {
        console.log(err.message);
    }
}