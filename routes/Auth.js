const express = require('express')
const router = express.Router()

const authController = require('../controllers/AuthController')

router.post('/registration', authController.registration)

module.exports = router