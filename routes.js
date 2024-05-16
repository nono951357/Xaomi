const express = require('express');
const con = require('./db');
const router = express.Router();
const path = require('path');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

router.get('/#', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

router.get('/rolunk.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'rolunk.html'));
});

router.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

router.get('/post', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

router.post('/upload', (req, res) => {
    const { name, email } = req.body;
    const sql = 'INSERT INTO hirlevel (nev, email) VALUES (?, ?)';
    con.query(sql, [name, email], (err, result) => {
        if (err) {
            console.log('Error inserting data');
            return res.status(500).send('Error inserting data');
        }
        res.sendFile(path.join(__dirname, 'index.html'));
    });
});

module.exports = router;