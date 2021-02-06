const express = require('express')
const router = express.Router()
const authenticate = require('../middleware/authenticate')
const nodeController = require('../controllers/NodeController')


router.post('/', authenticate, nodeController.createNode)

module.exports = router