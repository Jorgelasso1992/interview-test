const mongoose = require('mongoose')
URI = ('mongodb://localhost/dbCars')

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

    .then(db => console.log('DB Connected:', db.connection.name))
    .catch(error => console.log(error))

module.export = mongoose;