const express = require('express')
const app =express()
const port = process.env.PORT || 4000
const data = require('./data')

app.get('/people',(req,res)=>{
    res.status(201).json(data)
})


app.listen(port,()=>{
    console.log(`listening at ${port}`);
})