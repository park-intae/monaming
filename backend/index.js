const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// MySQL 연결
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'monaming'
})

db.connect((err) => {
    if (err) throw err;
    console.log('MySQL 연결 성공!');
});

app.get('/api/products-attributes', (req, res) => {
    db.query('select * from products_attributes', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`서버가 http://localhost:${port}에서 실행 중`);
});