//responsável por conectar ao mongodb
const mongoose = require('mongoose')

const dbconfig = 'mongodb+srv://usuario:usuariosenha@testedb.wjorjqk.mongodb.net/?retryWrites=true&w=majority'

const connection = mongoose.connect(dbconfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = connection