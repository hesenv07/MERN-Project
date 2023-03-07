const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (req, res) => {
    res.send(`<h1>Salam</h1>`)
})



app.get('/users/:id', (req, res) => {
    res.send(`<h1>${req.params.id}</h1>`)
})

app.listen(port, hostname, () => {
    console.log("Running")
})