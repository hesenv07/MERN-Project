const express = require('express');
const app = express();
const path=require('path');
const { engine } = require("express-handlebars");
const hostname = '127.0.0.1';
const port = 3000;

// for dowload static file
app.use(express.static('public'))

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/home', (req, res) => {
    res.render('site/home')
})



app.get('/about', (req, res) => {
    res.send('site/about')
})

app.listen(port, hostname, () => {
    console.log("Running")
})