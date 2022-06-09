const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        deposit: {
            type: Number,
            required: true,
            max: 1000000000000,
        },
        // account: {
        //     type: Number,
        //     required: true,
        //     unique: true,
        // },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true,
            lowercase: true
        },
       
    },
    {
        timestamps: true
    }
)


module.exports = mongoose.model('Post', postSchema);