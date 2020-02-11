const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))
    //Express hbd engine
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');
app.get('/', (req, res) => {
    res.render('home', {
        name: 'Saúl narvaez',
    });

});
app.get('/about', (req, res) => {
    res.render('about')
});

app.get('/contact', (req, res, next) => {
    res.render('contact');
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${ port }`)
});