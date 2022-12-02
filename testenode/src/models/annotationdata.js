//o arquivo xData.js é responsável por comunicar com o banco de dados (observar que mexe com o mongoose [que vem do mongodb])
//  --contem os dados da annotation--
const mongoose = require('mongoose')

const annotationdataschema = new mongoose.Schema({
    names: String,
    description: String,
    values: String,
    priority: Boolean,
})

module.exports = mongoose.model('Annotations', annotationdataschema)