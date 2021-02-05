const bcrypt = require('bcryptjs')
const User = require('../models/User')
const jwt = require('jsonwebtoken')

const registration = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
        if (err) {
            res.json({
                error: err
            })
        }

        let user = new User({
            username: req.body.username,
            password: hashedPass,
            firstName: req.body.firstName,
            middleName: req.body.middleName,
            lastName: req.body.lastName,
            birthday: req.body.birthday
        })
        user.save()
            .then(response => {
                res.json({
                    message: 'User ' + user.username + ' created!'
                })
            }).catch(err => {
            res.json({
                message: 'Error creating user'
            })
        })
    })
}

module.exports = {
    registration
}