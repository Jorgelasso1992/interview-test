const { Router } = require('express')
const router = Router()
const UserCtrl = require('../controller/user.controller')
const Auth = require('../helper/Auth')

router.post('/create', UserCtrl.create)
router.post('/login', UserCtrl.login)
router.get('/list/:id', Auth.verifyToken, UserCtrl.listId)
router.get('/list', UserCtrl.list)

module.exports = router