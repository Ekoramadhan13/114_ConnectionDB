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

