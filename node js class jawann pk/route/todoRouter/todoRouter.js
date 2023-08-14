const express = require('express')
const router = express.Router()

const { todoAdd, getAllTodo } = require('../../controller/todoCon.js')

router.post('/todoAdd', todoAdd)
router.get('/getAllTodo', getAllTodo)

module.exports = router