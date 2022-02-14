const Auth = {}
const jwt = require('jsonwebtoken')

Auth.verifyToken = (req, res, next) => {
    if (!req.headers.autorization) {
        return res.json({
            message: 'You are not allowed'
        })
    }

    const token = req.headers.autorization
    if (token == null) {
        return res.json({
            message: 'You are not allowed'
        })
    }

    jwt.verify(token, 'Secret', (error, result) => {
        if (error)
            return res.json({
                message: 'You are not allowed'
            })


        next();
    })
}

module.exports = Auth;