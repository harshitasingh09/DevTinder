const express = require('express');

const app= express();

 app.get("/user",(req, res)=>{
    console.log("Received a GET request to /user", req.query);     
    res.send({
    name: 'John Doe',
    age: 30,
    email: "john.doe@example.com"
 });})

 app.get("/user/:id",(req, res)=>{
    console.log("Received a params", req.params);     
    res.send({
    name: 'John Doe',
    age: 30,
    email: "john.doe@example.com"
 });})

app.use("/hello",(req, res)=>{res.send('Middleware 1');})


app.listen(3000,()=>{console.log('Server is running on port 3000')});