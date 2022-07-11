const TeacherModel = require('../../models/teacher/teacher.model')

class TeacherService {
    static create(req,res){
        TeacherModel.create(req.body)
        .then((teacher)=>
            res.status(201).json(teacher)
            )
    }
    
    static retrieve(req, res){
        TeacherModel.findById(req.params.id).then((teacher)=>{
            res.status(200).json(teacher)
        })
    }
    static list(req, res){
        TeacherModel.find().then((teachers)=>{
            res.status(200).json(teachers)
        })
    }
    static update(req, res){
        TeacherModel.findByIdAndUpdate(req.params.id, req.body, {'new':true}).then((teacher)=>{
            res.status(200).json(teacher)
        }) 
    }
    static delete(req, res){
        TeacherModel.findByIdAndRemove(req.params.id).then((teacher)=>{
            res.status(200).json(teacher)
        })
    }

}
module.exports = TeacherService;