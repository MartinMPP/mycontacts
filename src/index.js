const express = require('express')

const app = express()

app.get('/', (request, response) => {
  responde.send('Hello World!')
})

app.listen(3000, () => console.log('Servidor iniciado em http://localhost:3000'))





