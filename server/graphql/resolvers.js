const bcrypt = require('bcryptjs');

module.exports = {
    
    hello: (args, req) => {
        return 'Hi My Name is Whaat?'
    },

    signup: ({name, email, password, bio}, req) =>  {

    }
}