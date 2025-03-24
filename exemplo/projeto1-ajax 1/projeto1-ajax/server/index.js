const express = require('express')
const app = express()
var cors = require('cors')

app.use(cors({
    origin: '*'
}));

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())


app.get('/', function (req, res) {
  const retorno = {
      resp: "Hello World"
  }
  
    res.send(retorno)
})


app.post('/calc', (req, res)=>{
    const opc = req.body.opc
    const n1 = req.body.n1
    const n2 = req.body.n2

    const retorno = {opc, n1, n2}
    res.send(retorno)


})

const port = 3000

app.listen(port, () =>{
     console.log(`Operando na porta ${port}`)
} )

