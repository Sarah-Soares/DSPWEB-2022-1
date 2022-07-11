var mongoose = require('mongoose');

var UserSchema = mongoose.Schema(
    {
        name:{type:String, required:true, max:100}, 
        ira:{type:String, required:true, max:15},
        course:{type:String, required:true, max:100} 

    }
);
var UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;