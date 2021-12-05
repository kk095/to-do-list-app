// const Todolist = require('../models/todolist');

// Todolist.deleteMany(Todolist.find({}),function(err,newdata){
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(newdata);
// })

module.exports.home = function(req,res){
    res.render("home",{
        'home':'Home page'
    })
};

module.exports.tasks = function(req,res){
    console.log(req.body);
    res.redirect("back");
}