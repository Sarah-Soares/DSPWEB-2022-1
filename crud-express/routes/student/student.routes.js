var express = require('express');
var router = express.Router();
var StudentService = require('../../services/students/student.service')

router.get('/list', (req, res, next)=> {
    StudentService.list(req, res)
});

router.post('/create', (req, res, next)=>{
        StudentService.create(req,res)
});

router.patch('/update/:id', (req, res, next) => {
    StudentService.update(req,res)
});

router.get('/retrieve/:id', (req, res, next) => {
    StudentService.retrieve(req, res)
});

router.delete('/delete/:id', (req, res, next) => {
    StudentService.delete(req,res)
});

module.exports = router;