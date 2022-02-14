const userCtrl = {}
const User = require('../models/user.models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

userCtrl.create = async (req, res) => {
    const { name, password } = req.body
    const NewUser = new User({
        name,
        password
    })

    const nameUser = await User.findOne({ name: name })

    if (nameUser) {
        res.json({
            message: 'Name already exist'
        })
    } else {
        NewUser.password = await bcrypt.hash(password, 10)
        const token = jwt.sign({ _id: NewUser._id }, 'Secret')
        await NewUser.save()
        res.json({
            message: 'Registered user',
            id: NewUser._id,
            name:NewUser.name,
            token,
            userType: NewUser.userType
        })
    }
}

userCtrl.login = async (req, res) => {
    const { name, password } = req.body
    const user = await User.findOne({ name: name })
    if (!user) {
        return res.json({
            message: 'Wrong username'
        })
    }

    const match = await bcrypt.compare(password, user.password)

if(match){
    const token = jwt.sign({_id: user._id},'Secret')
    res.json({
        message: 'You have logged in',
        id: user.id,
        name: user.name,
        token,
        userType: user.userType
    })
}else{
    res.json({
        message: 'Incorrect password'
    })
}

}

userCtrl.listId = async (req, res) => {
    const id = req.params.id
    const response = await User.findById({ _id: id })
    res.json(response)
}

userCtrl.list = async(req,res) => {
    const response = await User.find()
    res.json(response)
}

module.exports=userCtrl;
