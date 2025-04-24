const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3');
const path = require('path');

const app = express();
const db = new sqlite3.Database('./users.db');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: 'secretKey', resave: false, saveUninitialized: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 로그인 페이지
app.get('/', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.get("SELECT * FROM users WHERE username=? AND password=?", [username, password], (err, user) => {
    if (user) {
      req.session.user = user;
      req.session.cart = [];
      res.redirect('/home');
    } else {
      res.send("로그인 실패");
    }
  });
});

app.get('/logout', (req, res) => {
  req.session.destroy(() => res.redirect('/'));
});

app.get('/home', (req, res) => {
    if (!req.session.user) return res.redirect('/');
    res.render('home', { user: req.session.user });
  });

  app.get('/products', (req, res) => {
    db.all("SELECT * FROM products", (err, products) => {
      res.render('products', { products, user: req.session.user });
    });
  });


app.get('/add-to-cart/:id', (req, res) => {
    if (!req.session.user) return res.redirect('/');
  
    const id = parseInt(req.params.id);
    db.get("SELECT * FROM products WHERE id=?", [id], (err, product) => {
      const cart = req.session.cart || [];
      const existing = cart.find(p => p.id === product.id);
      if (existing) {
        existing.quantity++;
      } else {
        cart.push({ ...product, quantity: 1 });
      }
      req.session.cart = cart;
      res.redirect('/products');
    });
  });
  
  app.get('/cart', (req, res) => {
    if (!req.session.user) return res.redirect('/');
    
    const cart = req.session.cart || [];
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
    res.render('cart', { cart, total });
  });
  

app.listen(3000, () => {
    console.log('서버 실행 중');
  });