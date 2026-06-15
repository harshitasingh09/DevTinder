const express = require('express');

const app= express();

app.use("/test",(req, res)=>{res.send('test 2');})
app.use("/hello",(req, res)=>{res.send('Middleware 1');})


app.listen(3000,()=>{console.log('Server is running on port 3000')});