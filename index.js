const express = require('express');
let mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: '3309', 
    password: 'Sambeng13',
    database: 'mahasiswa'
});

db.connect((err) => {
    if (err) {
        console.log(' Error connection to MySQL:', err.stack);
        return;
    }
    console.log(' MySQL connected successfully');
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/biodata', (req, res) => {
    const sql = 'SELECT * FROM biodata';
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ message: 'Database error', error: err });
        }
        res.json(result);
    });
});

