const User = require('../models/User')

//info from authentication principal
const info = async (req, res, next) => {
    console.log(req.user.username);
    await User.findOne( { username: req.user.username }).exec()
        .then(response => {
             console.log(response)
             res.json({
                 id: response.id,
                 username: response.username,
                 firstName: response.firstName,
                 middleName: response.middleName,
                 lastName: response.lastName,
                 birthDay: response.birthday
             })
         })
        .catch(err => {
             res.json({
                 message: 'Error find User!'
             })
        })
}

//find all User
const findAll = (req, res, next) => {
    User.find()
        .then(response => {
            res.json({
                response
            })
        })
        .catch(error => {
                res.json({
                    message: 'Error find Users!'
                })
            }
        )
}

// create new User
const create = (req, res, next) => {
    let user = new User({
        username: req.body.username,
        password: req.body.password
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
}

const update = (req, res, next) => {
    let userId = req.body.userId

    let updateDate = {
        password: req.body.password
    }

    User.findByIdAndUpdate(userId, {$set: updateDate})
        .then(() => {
            res.json({
                message: 'User ' + userId + 'updated!'
            })
        })
        .catch(err => {
            res.json({
                message: 'Update failed!'
            })
        })
}

module.exports = {
    findAll, create, update, info
}
