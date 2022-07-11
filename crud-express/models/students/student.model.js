var mongoose = require("mongoose");
var Schema = mongoose.Schema

var StudentSchema = Schema(
    {
   // _id: {type:Number, required:true},
    course: {type: String, required:true, max: 200}, 
    ira:{type: Number, required:true}, 
    name:{type: String, required:true, max: 200}
    }
);

var StudentModel = mongoose.model('students', StudentSchema);

module.exports = StudentModel;