
// console.log('hello world')

// installation
// npm i express
// nodemon hamy help karta ha jab bhi hum apni server side application may change karty ha tou wo khud se hamari server side application ko restarted kardyta ha 
// npm i nodemon

const express = require("express")
const app = express()

// localhost:5000
const port = 5000


// create api or api ek mehtod ha mehtod ka matlb kya hota ha just lik a function butmehtod may ek farq hota wo y hota dot '.' k sth use hota ha 
// .get() first argument ha path(/) or dusry k undr ata ha function  

app.get('/', (req, res) => {
    // request front-end se bhejo ga or response backend se mily ga 
    // console.log('hello world to first API')

const arr = [{ name: 'areeb', age: '23' }, { name: 'Ali', age: '23' },{ name: 'hussain', age: '23' }, { name: 'Umar', age: '23' }]

    // mujhy ub respone bhejna ha user ko
    res.send(arr)
})

// app ko run karny k liye listen ka use karunga
app.listen(port, () => {
    console.log('Server is running')
})