const mysqlConnection = require('mysql');

const con = mysqlConnection.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'xaomi'
});

con.connect(error => {
    if (error) {
        console.log('Error connecting to database');
        return;
    }
    console.log('Connected to database');
});

module.exports = con;