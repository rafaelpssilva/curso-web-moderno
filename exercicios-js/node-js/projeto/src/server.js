const express = require('express')
const app = express()

const porta = 8080

app.get('/produtos', (req, res, next) => {
    res.send({
        nome: 'Notebook',
        preco: 123.45
    })
})

app.listen(porta, () => {
    console.log(`Servidor is running port:${porta}`)
})