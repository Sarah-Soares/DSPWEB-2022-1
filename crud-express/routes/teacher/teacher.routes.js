var express = require('express');
var router = express.Router();
var TeacherService = require('../../services/teacher/teacher.service')

router.get('/list', (req, res, next)=> {
    TeacherService.list(req, res)
});

router.post('/create', (req, res, next)=>{
        TeacherService.create(req,res)
});

router.patch('/update/:id', (req, res, next) => {
    TeacherService.update(req,res)
});

router.get('/retrieve/:id', (req, res, next) => {
    TeacherService.retrieve(req, res)
});

router.delete('/delete/:id', (req, res, next) => {
    TeacherService.delete(req,res)
});

module.exports = router;