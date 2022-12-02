const express = require('express')
const cors = require('cors')

const rotas = require('./routes')

const app = express()
require('./config/ConfigMongo')

app.use(cors())
app.use(express.json())
app.use(rotas)

/*app.get('/', (Request, Response) => {
  Response.send("Teste do node mandando o bagui :)")
})*/

console.log("Foi")
app.listen(3333)