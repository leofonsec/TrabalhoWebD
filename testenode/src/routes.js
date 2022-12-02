//é oq é enviado para a main (index no caso)
const express = require('express')
const rotas = express.Router()

const annotationcontroller = require('./controllers/annotationcontroller')
const contentcontroller = require('./controllers/contentcontroller')
const prioritycontoller = require('./controllers/prioritycontroller')

//rota annotation
rotas.post('/annotations', annotationcontroller.create)
rotas.get('/annotations', annotationcontroller.read)
rotas.delete('/annotations/:id', annotationcontroller.delete)

//rota priority
rotas.get('/priority', prioritycontoller.read)
rotas.post('/priority/:id', prioritycontoller.update)

//rota content
rotas.post('/contents/:id', contentcontroller.update)

module.exports = rotas