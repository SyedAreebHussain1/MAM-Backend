const express = require('express')
const router = express.Router()
router.use('/auth', require('./authRouter/authRouter'))
router.use('/user', require('./todoRouter/todoRouter'))

module.exports = router