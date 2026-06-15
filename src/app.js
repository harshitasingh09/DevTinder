const express = require('express');

const app= express();

app.use("/",(req, res)=>{res.send('Middleware 1');})

app.listen(3000,()=>{console.log('Server is running on port 3000')});