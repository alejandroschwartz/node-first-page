const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html', {title: 'Node web'});
});

router.get('/store', (req, res) => {
    res.render('store.html', {title: 'Tienda'});
});

router.get('/contact', (req, res) => {
    res.render('contact.html', {title: 'Contactos'});
});

module.exports = router;