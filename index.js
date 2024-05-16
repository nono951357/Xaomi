const express = require('express');
const routes = require('./routes');
const path = require('path');
const { error } = require('console');
const app = express();

const port = process.env.PORT || 5781;

app.set('port', port);
app.set('view engine', 'ejs');

app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use(routes);

app.listen(port, error => {
    if (error) {
        console.log('Error starting the server');
    }
    console.log('Server is running on port', port);
});
