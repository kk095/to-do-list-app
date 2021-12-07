const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const todolist =  new Schema({
    task:String,
    date: Date,
    tag:String,
    done:{type:Boolean,default:false},
    priority:{type:Boolean,default:false}
});

const todo = mongoose.model('todolist',todolist);


module.exports = todo;