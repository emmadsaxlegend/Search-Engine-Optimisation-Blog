const mongoose = require('mongoose');
const crypto = require('crypto');
const bcypt = require('bcrypt')
const saltRounds = 10;


const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            trim: true,
            required: true,
            max: 32,
            unique: true,
            index: true,
            lowercase: true
        },
        name: {
            type: String,
            trim: true,
            required: true,
            max: 32
        },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true,
            lowercase: true
        },
        account: {
            type: Number,
            required: true,
            unique: true,
        },
        profile: {
            type: String,
            required: true
        },
        hashed_password: {
            type: String,
            required: true
        },
        salt: String,
        about: {
            type: String
        },
        role: {
            type: String,
            trim: true,
        },
        photo: {
            data: Buffer,
            contentType: String
        },
        resetPasswordLink: {
            data: String,
            default: ''
        }
    },
    {
        timestamps: true
    }
)
//*****************************USING CRYPTO and SALT HASHING*********** */
userSchema.virtual('password')
.set(function(password){
    // Create a temporary variable called _password
    this._password = password
    // generate salt
    this.salt = this.makeSalt()
    //encryptPassword
    this.hashed_password = this.encryptPassword(password)
})
.get(function(){
    return this._password
});


userSchema.methods = {
    authenticate: function(plainText){
        return this.encryptPassword(plainText) == this.hashed_password
    },
    encryptPassword: function(password){
        if(!password) return ''
        try{
            return crypto.createHmac('sha1', this.salt)
            .update(password)
            .digest('hex');
        }catch (err){
            return ''
        }
    },
    makeSalt: function(){
        return Math.round(new Date().valueOf() * Math.random()) + '';
    }
}
//*************************END OF CRYPTO and SALT HASHING*********** */


//..................USING BCRYPT HASHING ......................

// userSchema.pre('save', async function(next){
//     if(!this.isModified('password')){
//         next()
//     }
//     this.password = await bcypt.hash(this.password, 10);
// })

module.exports = mongoose.model('User', userSchema);