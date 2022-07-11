const StudentsModel = require ('../../models/students/StudentsModel')
let students = [
   /* {
        _id:0, 
        name: 'Sarah',
        course: 'Sistemas de Informação',
        ira: 7},

    {
        _id:1, 
        name: 'Juan',
        course: 'Engenharia de Computação',
        ira: 7
    },

    {
        _id:2, 
        name: 'Momô',
        course: 'Engenharia de Computação',
        ira: 5 
    },*/
]
let _id = 0

class StudentService {
    static register(data){
        let student = new StudentsModel(
            _id++,
            data.name,
            data.course, 
            data.ira
        );
            students.push(student);
        return students
    }
    static list(){
        return students;
    }
    static update(_id, data){
        for(let s of students){
            if(s._id == _id){
                s.name = data.name
                s.course = data.course
                s.ira = data.ira
                return s;
            }
        }
        return null;
    }
    static delete(_id){
        for (let i = 0; i < students.length; i++){
            if(students[i]._id == _id){
                students.splice(i, 1);
                return true;
            }
        }
        return false;
    }
    static retrieve(_id){
        for(let i = 0; i < students.length; i++){
            str += ` ${i} `
            if(students[i]._id == _id){
                return students[i];
            }
        }
    }
}
module.exports = StudentService