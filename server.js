const express = require('express');
const path = require('path');
const app = express();

app.listen(3000, () => {
    console.log('App is connected to port 3000');
});

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'about.html'));
});

app.get('/error', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'error.html'));
});

app.get('/menu', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'menu.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'about.html'));
})

app.get('/order.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'order.html'));
})

