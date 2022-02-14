const CarsCtrl = {}
const Car = require('../models/cars.models')

CarsCtrl.create = async (req, res) => {
    const { brand, color, license, userName } = req.body
    const NewCar = new Car({
        brand,
        color,
        license,
        userName
    })

    const response = await NewCar.save()
    res.json({
        message: 'Car created',
        response
    })
}

CarsCtrl.list = async (req, res) => {
    const response = await Car.find()
    res.json(response)
}

CarsCtrl.listId = async (req, res) => {
    const id = req.params.id
    const response = await Car.findById({ _id: id })
    res.json(response)
}

//-------------------------------------------------
CarsCtrl.carsUser = async (req, res) => {
    const id = req.params.id
    const response = await Car.find({ userName: id })
    res.json(response)
}

CarsCtrl.delete = async (req, res) => {
    const id = req.params.id
    await Car.findByIdAndRemove({ _id: id })
    res.json({
        message: 'Car deleted'
    })
}

CarsCtrl.update = async (req, res) => {
    const id = req.params.id
    await Car.findByIdAndUpdate({ _id: id }, req.body)
    res.json({
        message: 'Car updated'
    })
}

module.exports = CarsCtrl;