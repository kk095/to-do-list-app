const express = require('express');
const app = express();
const port = 8000;


app.get('/',function(req,res){
    res.end("hello!");

})






app.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log(`server is running on port : ${port}`);
})