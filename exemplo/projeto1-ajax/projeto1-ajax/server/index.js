const express = require('express')
const app = express()
var cors = require('cors')

app.use(cors({
    origin: '*'
}));


app.get('/', function (req, res) {
  const retorno = {
      resp: "Hello World"
  }
  
    res.send(retorno)
})

app.listen(3000)