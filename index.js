const express = require('express');
const app = express();
const port = 8000;
const path = require('path');
const db = require('./config/mongoose');



app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded());
app.use('/',require('./routers'));

// static middleware
app.use(express.static('assets'));








app.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log(`server is running on port : ${port}`);
})