const express = require('express');
const fs = require('fs');
const xml2json = require('xml2json');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', (req, res) => {
res.render('index');
});

app.get('/main', (req, res) => {
// robots変数が定義されていないため、ここで適切な値を設定する必要があります。
res.render('main', { robots: robots });
});

app.get('/convert', (req, res) => {
res.render('convert');
});

// XMLをJSONに変換して保存するエンドポイント
app.get('/convert-xml', (req, res) => {
fs.readFile('VrcRobotConst.xml', (err, data) => {
if (err) {
console.error(err);
return res.status(500).send('サーバーでエラーが発生しました。');
}
try {
const json = xml2json.toJson(data, { compact: true, spaces: 2 });
fs.writeFile('output.json', json, (err) => {
if (err) {
console.error(err);
return res.status(500).send('ファイルの保存中にエラーが発生しました。');
}
res.send('output.jsonが正常に生成されました。');
});
} catch (err) {
console.error(err);
return res.status(500).send('XMLの解析中にエラーが発生しました。');
}
});
});

app.listen(port, () => {
console.log(`Server running at http://localhost:${port}`);
});