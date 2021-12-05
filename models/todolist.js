const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const todolist =  new Schema({
    todolist:{
        type:'string',
        required:true,
    }
});

const todo = mongoose.model('todolist',todolist);


module.exports = todo;