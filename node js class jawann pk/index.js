// // class 1
// // console.log('hello world')

// // installation
// // npm i express
// // nodemon hamy help karta ha jab bhi hum apni server
// // side application may change karty ha tou wo khud se hamari
// //  server side application ko restarted kardyta ha 
// // npm i nodemon

// const express = require("express")
// const app = express()

// // localhost:5000
// const port = 5000


// // create api or api ek mehtod ha mehtod ka matlb kya hota ha just lik a function butmehtod may ek farq hota wo y hota dot '.' k sth use hota ha 
// // .get() first argument ha path(/) or dusry k undr ata ha function  

// app.get('/todo', (req, res) => {
//     // request front-end se bhejo ga or response backend se mily ga 
//     // console.log('hello world to first API')

//     const arr = [{ name: 'areeb', age: '23' }, { name: 'Ali', age: '23' }, { name: 'hussain', age: '23' }, { name: 'Umar', age: '23' }]

//     // mujhy ub respone bhejna ha user ko
//     res.send(arr)
// })

// // app ko run karny k liye listen ka use karunga
// app.listen(port, () => {
//     console.log('Server is running')
// })






// //// class 2


// const express = require("express")
// const cors = require("cors")
// const bd = require("body-parser")
// const mongoose = require("mongoose")
// // const { MongoClient, ServerApiVersion } = require('mongodb');
// const app = express()
// const port = 5000
// const authModel = require('./authschema')


// app.use(cors())
// app.use(bd.urlencoded({
//     extended: false
// }))
// app.use(bd.json())


// const uri = "mongodb+srv://AreebHusain:mongodbaReeb128@cluster0.ymorhs7.mongodb.net/?retryWrites=true&w=majority";
// mongoose.connect("mongodb+srv://AreebHusain:mongodbaReeb128@cluster0.ymorhs7.mongodb.net/?retryWrites=true&w=majority", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     w: 'majority', // Write concern
//     wtimeout: 30000 // Increased timeout in milliseconds (30 seconds)
// })
//     .then(() => {
//         console.log('Connected to MongoDB');
//     })
//     .catch(err => {
//         console.error('Error connecting to MongoDB:', err);
//     });

// // const client = new MongoClient(uri, {
// //     serverApi: {
// //         version: ServerApiVersion.v1,
// //         strict: true,
// //         deprecationErrors: true,
// //     }
// // });
// // async function run() {
// //     try {
// //         await client.connect();
// //         await client.db("admin").command({ ping: 1 });
// //         console.log("Database Connected");
// //     } finally {
// //         // Ensures that the client will close when you finish/error
// //         await client.close();
// //         // console.log("Database Not Connected ");
// //     }
// // }
// // run().catch(console.dir);

// // mongoose.connect("mongodb+srv://AreebHusain:mongodbaReeb128@cluster0.ymorhs7.mongodb.net/?retryWrites=true&w=majority", {
// //     useCreateIndex: true,
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true
// // })
// // mongoose.connection.on("connected",() => {
// //     console.log('Database Connected')
// // })
// // mongoose.connection.on("error",() => {
// //     console.log('Database Not Connected')
// // })

// app.get('/', (req, res) => {
//     const arr = [{ name: 'areeb', age: '23' }]
//     res.send(arr)
// })
// app.post('/signin', (req, res) => {
//     // console.log(req.body)
//     // database may store kar raha ho data
//     let userCreate = new authModel({
//         email: req.body.email,
//         password: req.body.password
//     })
//     userCreate.save()
//         .then((response) => {
//             // console.log('response=>', response)
//             res.status(200).send({ result: response, message: "Data store successfully" })
//         })
//         .catch((err) => {
//             // console.log('err=>', err)
//             res.status(400).send({ result: err.message ,message: "Data not store"})

//         })
// })
// app.listen(port, () => {
//     console.log('Server is running')
// })







//// class 3


const express = require("express")
const cors = require("cors")
const bd = require("body-parser")
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const app = express()
const port = 5000
const authModel = require('./authschema')

app.use(cors())
app.use(bd.urlencoded({
    extended: false
}))
app.use(bd.json())

mongoose.connect("mongodb+srv://AreebHusain:mongodbaReeb128@cluster0.ymorhs7.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    w: 'majority',
    wtimeout: 30000
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });


app.get('/', (req, res) => {
    const arr = [{ name: 'areeb', age: '23' }]
    res.send(arr)
})
app.post('/signup', async (req, res) => {
    // console.log(req.body)
    var checkUser = await authModel.findOne({
        email: req.body.email,
    })
    if (checkUser) {
        res.status(200).send({ result: checkUser, message: "Email Already Resgistered" })
    } else {
        var hashPass = await bcrypt.hash(req.body.password, 12)
        if (req.body.email !== "" && req.body.password !== "" && req.body.password.length > 7 ) {
            console.log('run')
            let userCreate = new authModel({
                email: req.body.email,
                password: hashPass
            })
            userCreate.save()
                .then((response) => {
                    res.status(200).send({ result: response, message: "User Signup successfully" })
                })
                .catch((err) => {
                    res.status(400).send({ result: err.message, message: "Data not store" })
                })
        } else {
            res.status(401).send({ message: "All field are Req" })
        }
    }


})
app.listen(port, () => {
    console.log('Server is running')
})


