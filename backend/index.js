const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// MySQL 연결
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'monaming',
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL 연결 성공!');
});

app.use(cors());
app.use(express.json());

//실행시 백엔드 연결
app.get('/', (req, res) => {
  res.json({ message: '3000포트 백엔드 연결' });
});

//products 가져오기
app.get('/api/products', (req, res) => {
  db.query('select * from products', (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
  console.log('products 호출 완료');
});

//attributes 가져오기
app.get('/api/attributes', (req, res) => {
  db.query('select * from attributes', (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
  console.log('attributes 호출 완료');
});

//products-attributes가져오기
app.get('/api/product-attributes', (req, res) => {
  db.query('select * from product_attributes', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
  console.log('제품-상세 호출 완료');
});

//product-attributes에서 제품정보 가져오기
app.get('/api/product-attributes/:id', (req, res) => {
  const id = req.params.id;

  const query = `
        SELECT a.name AS attribute_name, pa.value
        FROM product_attributes pa
        JOIN attributes a ON pa.attribute_id = a.id
        WHERE pa.product_id = ?
        `;

  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('DB오류:', err);
      return res.status(500).json({ error: '서버오류' });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: '제품 속성을 찾을 수 없습니다' });
    }

    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT}에서 실행 중`);
});
