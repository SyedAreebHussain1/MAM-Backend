const bcrypt = require("bcryptjs")
const authModel = require('../models/authSchema')


const signUp = async (req, res) => {
    var checkUser = await authModel.findOne({
        email: req.body.email,
    })
    if (checkUser) {
        res.status(200).send({ result: checkUser, message: "Email Already Resgistered" })
    } else {
        var hashPass = await bcrypt.hash(req.body.password, 12)
        if (req.body.email !== "" && req.body.password !== "") {
            let userCreate = new authModel({
                email: req.body.email,
                password: hashPass
            })
            userCreate.save()
                .then((response) => {
                    res.status(201).send({ result: response, message: "User Signup successfully" })
                })
                .catch((err) => {
                    res.status(401).send({ result: err, message: "Data not store" })
                })
        } else {
            res.status(400).send({ message: "All field are required" })
        }
    }
}
const signIn = async (req, res) => {
    var checkUser = await authModel.findOne({
        email: req.body.email,
        // password: passwordMatches
    })
    if (checkUser) {
        const checkPass = await bcrypt.compare(req.body.password, checkUser.password);
        if (checkPass) {
            res.status(200).send({ message: "singin Successfully" })
        } else {
            res.status(400).send({ message: "Your password is incorrect" })
        }
    } else {
        res.status(403).send({ message: "No user is registern with this Email" })
    }
}

module.exports = { signUp, signIn }