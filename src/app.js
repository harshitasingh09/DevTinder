const express = require('express');

const app= express();

app.use("/test",(req, res)=>{res.send('test 2');})
app.get("/test1",(req, res)=>{res.send('test 1');})
app.post("/test3", (req, res)=>{
    res.send('test 3');
})
app.delete("/delete",(req, res)=>{res.send('test 4');})
app.patch("/patch",(req, res)=>{res.send('test 5');})
app.use("/hello",(req, res)=>{res.send('Middleware 1');})


app.listen(3000,()=>{console.log('Server is running on port 3000')});