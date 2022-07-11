const TeacherModel = require ('../../models/teacher/TeacherModel')
let teachers = [
        {_id:0, 
        name: 'Aragão',
        salary: 100000000,
        admission: 1900},

        {_id:1, 
        name: 'Jeferson Carvalho',
        salary: 1000000,
        admission: 2015},

        {_id:2, 
        name: 'Momô, meu gato',
        salary: 1000000000000000,
        admission: 2022 },

]
let _id = 0

class TeacherService {
    static register(data){
        let teacher = new TeacherModel(
            _id++,
            data.name,
            data.salary, 
            data.admission
        );
            teachers.push(teacher);
        return teacher
    }
    static list(){
        return teachers;
    }
    static update(_id, data){
        for(let t of teachers){
            if(t._id == _id){
                t.name = data.name
                t.salary = data.salary
                t.admission = data.admission
                return t;
            }
        }
        return null;
    }
    static delete(_id){
        for (let i = 0; i < teachers.length; i++){
            if(teachers[i]._id == _id){
                teachers.splice(i, 1);
                return true;
            }
        }
        return false;
    }
    static retrieve(_id){
        for(let i = 0; i < teachers.length; i++){
            if(teachers[i]._id==_id){
                return teachers[i]
            }
        }
        return {}
    }
}
module.exports = TeacherService