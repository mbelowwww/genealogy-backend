const Node = require('../models/Node')
const User = require('../models/User')

const createNode = async (req, res, next) => {
    let user;
    await User.findOne({username: req.user.username})
        .then((result) => {
            user = result
        })
        .catch(err => {
            res.json({
                message: 'User not found for create Node!'
            })
        })

    let node = new Node({
        userId: user.id,
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        lastName: req.body.lastName,
        birthday: req.body.birthday,
        parents: req.body.parents,
        children: req.body.children
    });

    node.save()
        .then(response => {
        res.json({
            message: 'Node is created!',
            result: node
        })
    }).catch(err => {
        res.json({
            message: 'Node not created'
        })
    })
}

module.exports = {
    createNode
}