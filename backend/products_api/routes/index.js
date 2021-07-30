var express = require('express');
var router = express.Router();
var cors = require('cors');
const { Pool } = require('pg')
router.use(cors());
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Selling_book_store',
  password: '123',
  port: 5432,
})
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/products', function (req, res, next) {
  pool.query('SELECT * from "Products" order by id desc', (err, resp) => {
    if (err) {
      console.log(err);
    } else {
      res.send(resp.rows);
    }
  })


});
router.post('/products', function (req, res, next) {
  const { q } = req.body;
  console.log(q);
  let query = '';
  query = `%${q}%`;
  pool.query('SELECT * from "Products"  where name like $1 order by id desc', [query], (err, resp) => {
    if (err) {
      console.log(err);
    } else {
      res.send(resp.rows);
    }
  })
});
router.post('/add', function (req, res, next) {
  const { name, rating, price, photo } = req.body;
  pool.query('insert into  "Products" (name, rating, price, photo) values ($1,$2,$3,$4) RETURNING id', [name, rating, price, photo], (err, resp) => {
    if (err) {
      console.log(err);
    } else {
      const id = resp.rows[0].id;
      res.status(201).send([{ id, name, rating, price, photo }]);
    }
  })
});
router.delete('/delete/:id', function (req, res, next) {
  const id = req.params.id;
  pool.query('delete from "Products" where id = $1', [id], (err, resp) => {
    if (err) {
      res.send(err);
    } else {
      res.send(id);
    }
  })
});
router.put('/update/:id', function (req, res, next) {
  var id = req.params.id;
  var { name, rating, price, photo } = req.body;
  pool.query('UPDATE "Products" SET name = $2, rating = $3, price = $4 , photo = $5WHERE id = $1', [id, name, rating, price, photo], (err, resp) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).send({ id, name, rating, price, photo });
    }
  })
});
module.exports = router;
