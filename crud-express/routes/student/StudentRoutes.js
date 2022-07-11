var express = require('express');
var router = express.Router();
var StudentService = require('../../services/students/StudentsService');

router.get(
    '/list', 
    function(req, res, next){
        return res.json(StudentService.list())

})
router.post('/create', function (req, res, next){
    const student = StudentService.register(req.body);
    return res.json(student);
    
});
router.patch('/edit/:_id', function(req, res, next){
    const student = StudentService.update(req.params._id, req.body);
    return res.json(student)
});
router.delete('/delete/:_id', function (req, res, next){
    const ok = StudentService.delete(req.params._id);
    if (ok) return res.json({"sucess":true});
    else return res.json({"sucess":false})
});
router.get('/retrieve/:_id', function(req, res, next){
    const student =  StudentService.retrieve(req.params._id);
    return res.json(student)
})

module.exports = router