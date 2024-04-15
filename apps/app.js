const express = require('express');
const app = express();

//ルーティングの設定
app.get('/', (req, res) => {
  res.render('top.ejs');
});

app.get('/index', (req, res) => {
  res.render('index.ejs');
});

app.get('/main', (req, res) => {
  res.render('main.ejs');
});

//静的ファイルを使用するための設定
app.use('/public', express.static('public'));

// サーバー起動
app.listen(3000);
