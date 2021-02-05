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

const login = async (req, res, next) => {
    const login = req.body.username;
    const password = req.body.password


    await User.findOne({username: login})
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, function (err, result) {
                    if (err) {
                        res.json({
                            error: err
                        });
                    }
                    if (result) {
                        let token = jwt.sign({name: user.name},
                            'verySercretValue',
                            {expiresIn: '1h'});
                        res.json({
                            message: token
                        })
                    } else {
                        res.json({
                            message: 'Password does not matched!'
                        })
                    }
                });
            } else {
                res.json({
                    message: 'User not found!'
                })
            }
        })
}

module.exports = {
    registration, login
}