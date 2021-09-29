const mongoose = require('mongoose');
const { Schema } = mongoose;

let userSchema = new Schema(
    {
        //name: {type: String, required: true},
        firstname: {type: String, required: true},
        lastname: {type: String, required: true},
        username: {type: String, required: true, min: 8},
        identification: {type: Number, required: true},
        password: {type: String, required:true, min: 8 },
        photo: {type: String, required:true},
        active: {type: Boolean, required:true}

    }
)

module.exports = mongoose.model('user', userSchema);


