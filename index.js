const express = require('express');
let mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());


