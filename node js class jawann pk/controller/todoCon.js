const todoModel = require('../models/todoSchema')

const todoAdd = async (req, res) => {
    if (req.body.todoName !== "") {
        let todoCreate = new todoModel({
            todoName: req.body.todoName
        })
        todoCreate.save()
            .then((response) => {
                res.status(201).send({ result: response, message: "Your todo is successfully create" })
            })
            .catch((err) => {
                res.status(400).send({ result: err.message, message: "Todo not create" })
            })
    } else {
        res.status(401).send({ message: "Todo are required" })
    }
}
const getAllTodo = async (req, res) => {
    const result = await todoModel.find({})
    res.status(200).send({ message: "All Data Fetched Successfully", data: result })
}
module.exports = { todoAdd, getAllTodo }
