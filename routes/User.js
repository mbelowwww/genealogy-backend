const express = require('express')
const router = express.Router()

const userController = require('../controllers/UserController')

router.get('/', userController.findAll)

router.post('/', userController.create)

router.put('/', userController.update)

module.exports = router