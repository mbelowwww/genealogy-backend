const express = require('express')
const router = express.Router()

const authController = require('../controllers/AuthController')

router.post('/registration', authController.registration)
router.post('/login', authController.login)

module.exports = router