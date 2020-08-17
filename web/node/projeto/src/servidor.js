const express = require ( 'express')
const bancoDados = require('./bancoDados')
const app = express()
const bodyParser = require('body-parser')

const porta = 3003

app.use(bodyParser.urlencoded({ extended: true}))

app.get('/produtos', (req, res) =>{
    res.send(bancoDados.getProdutos())
})
app.get('/produtos/:id', (req,res) => {
    res.send(bancoDados.getProduto(req.params.id))
})
app.post('/produtos', (req, res) =>{
    const produto = bancoDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})
app.put('/produtos/:id', (req, res) =>{
    const produto = bancoDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})
app.delete('/produtos/:id', (req, res) =>{
    const produto = bancoDados.excluirProduto(req.params.id)
    res.send(produto)
})


app.listen(porta, () => console.log(`Server esta rodando na porta: ${porta}`))