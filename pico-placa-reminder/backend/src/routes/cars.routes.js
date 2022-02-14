const { Router } = require('express')
const router = Router()
const CarsCtrl = require('../controller/cars.controller')
const Auth = require('../helper/Auth')

router.post('/create', Auth.verifyToken, CarsCtrl.create)
router.get('/listCars', Auth.verifyToken, CarsCtrl.list)
router.get('/list/:id', Auth.verifyToken, CarsCtrl.listId)
router.delete('/delete/:id', Auth.verifyToken, CarsCtrl.delete)
router.put('/update/:id', Auth.verifyToken, CarsCtrl.update)
router.get('/listCarsUser/:id', Auth.verifyToken, CarsCtrl.carsUser)

module.exports = router;