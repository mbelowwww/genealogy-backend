const express = require('express')
const router = express.Router()

const userController = require('../controllers/UserController')
const authenticate = require('../middleware/authenticate')

router.get('/', authenticate,userController.findAll)
router.post('/', authenticate, userController.create)
router.put('/', authenticate,userController.update)

module.exports = router