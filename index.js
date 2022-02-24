const express = require('express')
const app = express()
const port = 3000
app.listen(port, () => console.log('Listening the port', port))

/*Request GET recibe 2 params: URI y clousure*/
app.get('/dashboard', (req, res) =>{
  res.send('Executing using the port')
})

app.get('/my-app', (req, res) =>{
  res.send('Ruta nueva')
})

app.get('/json-structure', (req, res) =>{
  res.json({
    product : 'Element1',
    price: 12000,
    size: 'S',
  })
})
