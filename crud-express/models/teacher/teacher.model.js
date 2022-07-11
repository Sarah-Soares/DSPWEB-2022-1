var mongoose = require("mongoose");
var Schema = mongoose.Schema

var TeacherSchema = Schema(
    {
    //id: {type:Number, required:true},
    salary: {type: Number, required:true}, 
    admission:{type: String, required:true, max: 200}, 
    name:{type: String, required:true, max: 200}
    }
);

var TeacherModel = mongoose.model('teachers',TeacherSchema);

module.exports = TeacherModel;