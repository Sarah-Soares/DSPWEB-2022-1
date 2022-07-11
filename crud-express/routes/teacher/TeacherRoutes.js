var express = require('express');
var router = express.Router();
var TeacherService = require('../../services/teacher/TeacherService');

router.get(
    '/list', 
    function(req, res, next){
        return res.json(TeacherService.list())

})
router.post('/create', function (req, res, next){
    const teacher = TeacherService.register(req.body);
    return res.json(teacher);
    
});
router.patch('/edit/:_id', function(req, res, next){
    const teacher = TeacherService.update(req.params._id, req.body);
    return res.json(teacher)
});
router.delete('/delete/:_id', function (req, res, next){
    const ok = TeacherService.delete(req.params._id);
    if (ok) return res.json({"sucess":true});
    else return res.json({"sucess":false})
});
router.get('/retrieve/:_id', function(req, res, next){
    const teacher =  TeacherService.retrieve(req.params._id);
    return res.json(teacher)
})

module.exports = router