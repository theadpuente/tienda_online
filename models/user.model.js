const {model, Schema} = require('mongoose');

const userSchema = new Schema({

    username: {
        type: String,
        require: true,
    },

    email: {

        type: String,
        validate:  /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/
    },

    password: String,

    age: {

        type: Number,
        min: 18,
        max: 65
    },

    products: [{

        type: Schema.Types.ObjectId, ref: 'product'
    }]
});


module.exports = model('user', userSchema);



