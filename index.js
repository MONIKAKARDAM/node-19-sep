const express = require('express');
const connect = require('./connection ');
const student = require('./routes/students')
const app = express();
connect();
app.use(express.json());
app.use(student);




app.listen(3000,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('server is running on port 3000')
    }
})
