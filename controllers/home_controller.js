const Todolist = require('../models/todolist');



module.exports.home = function(req,res){
    if(req.query.filter){
        switch(req.query.filter){
            case 'latest':
                Todolist.find({}).sort({date:-1}).exec((err,docs)=>{
                    if(err){
                        console.log(err);
                        return;
                    }
                    res.render("home",{
                        'data':docs
                    });
                })
                break;
            case 'oldest':
                Todolist.find({}).sort({date:1}).exec((err,docs)=>{
                    if(err){
                        console.log(err);
                        return;
                    }
                    res.render("home",{
                        'data':docs
                    });
                })
                break;
            case 'done':
                Todolist.find({done:true}).sort({date:1}).exec((err,docs)=>{
                    if(err){
                        console.log(err);
                        return;
                    }
                    res.render("home",{
                        'data':docs
                    });
                })
                break;
            case 'undone':
                Todolist.find({done:false}).sort({date:1}).exec((err,docs)=>{
                    if(err){
                        console.log(err);
                        return;
                    }
                    res.render("home",{
                        'data':docs
                    });
                })
                break;
            case 'all':
                res.redirect("/");
                break;
            case 'home':
                Todolist.find({tag:'home'}).sort({date:1}).exec((err,docs)=>{
                    if(err){
                        console.log(err);
                        return;
                    }
                    res.render("home",{
                        'data':docs
                    });
                });
                break;
            case 'other':
                Todolist.find({tag:'other'}).sort({date:1}).exec((err,docs)=>{
                    if(err){
                        console.log(err);
                        return;
                    }
                    res.render("home",{
                        'data':docs
                    });
                })
                break;
            case 'profession':
                Todolist.find({tag:'professional'}).sort({date:1}).exec((err,docs)=>{
                    if(err){
                        console.log(err);
                        return;
                    }
                    res.render("home",{
                        'data':docs
                    });
                })
                break;
            case 'personal':
                Todolist.find({tag:'personal'}).sort({date:1}).exec((err,docs)=>{
                    if(err){
                        console.log(err);
                        return;
                    }
                    res.render("home",{
                        'data':docs
                    });
                })
                break;
            default:
                console.log("filter-none");
        }
    }
    Todolist.find({},function(err,docs){
        if(err){
            console.log(err);
            return
        }
        res.render("home",{
            'home':'Home page',
            'data':docs
        })
    })
};



module.exports.tasks = function(req,res){
    Todolist.create(req.body,function(err,newdata){
        if(err){
            console.log(err);
            return
        }
    })
    res.redirect("/");
}
module.exports.checkbox = function(req,res){
   if(Object.keys(req.body).length===0){
       if(req.query.check=='true'){
           let id = req.query.id;
           Todolist.findOneAndUpdate({_id:id},{done:false},function(err,docs){
            if(err){
                console.log(err);
                return
            }
            res.redirect("/");
            
        })
       }
   }
   else{
       let id = Object.keys(req.body)[0];
       Todolist.findOneAndUpdate({_id:id},{done:true},function(err,docs){
           if(err){
               console.log(err);
               return
            }
            res.redirect("/");       
        })
    }
}

module.exports.priority = function(req,res){
    let priority=true;
    if(req.query.priority=='true'){
        priority=false;
    };
    Todolist.findByIdAndUpdate(req.query.id,{priority:priority},function(err,docs){
        if(err){
            console.log(err);
            return
        }
    })
    res.redirect("back");
}

module.exports.delete = function(req, res){
    Todolist.deleteMany({done:true},function(err,docs){
        if(err){
            console.log(err);
            return
        }
        res.redirect("/");
    })
}