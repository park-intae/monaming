const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = 3001;

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

app.use(cors());
app.use(express.json());

//실행시 백엔드 연결
app.get('/', (req, res) => {
    res.json({ message: '3001포트 백엔드 연결' });
});

//products-attributes가져오기
app.get('/api/products-attributes', (req, res) => {
    db.query('select * from products_attributes', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
    console.log('제품-상세 호출 완료');
});

app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT}에서 실행 중`);
});