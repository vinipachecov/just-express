const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`<h1> welcome to the home GET page</h1>`)  
})

app.post('/', (req, res) => {
  res.send(`<h1> welcome to the home POST page</h1>`)  
})

app.delete('/', (req, res) => {
  
})

app.put('/', (req, res) => {
  
})

app.listen(3000);