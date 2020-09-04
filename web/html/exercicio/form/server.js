const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios', (req, res)=>{
    console.log(req.body)
    res.send('<h1>Parabens, Usuario Incluido</h1>')
})
app.post('/usuarios/:id', (req, res)=>{
    console.log(req.body)
    console.log(req.params.id)
    res.send('<h1>Parabens, Usuario alterado</h1>')
})

app.listen(3003)