const express = require('express');
const app = express();
const port = 3000;

// EJSをビューエンジンとして設定
app.set('view engine', 'ejs');
app.set('views', './views');

// 静的ファイルの提供
app.use(express.static('public'));

//JSONデータ    vrcRoboconst.xmmlのコンフィグレーション名をidにする　xml→jsonに変換ツール＋αを作る
const robots = [
{id: "SRA100-02+A3+ServoGun+Slider TMC_SpotSlider", maker: "KAWASAKI", reach: "2000mm", payload: "120kg", src: "png/KAWASAKI/UX120-E001-C52-TMC-SPT.ini.png", date:"2021-10-01"},
{id: "UX120-E001-C52-TMC-SPT.ini", maker: "NACHI", reach: "2600mm", payload: "166kg", src: "png/KAWASAKI/UX120-E001-C52-TMC-SPT.ini.png", date:"2021-10-11"},
{id: "UX120-E001-C52-TMC-SPT.ini", maker: "FANUC", reach: "1100mm", payload: "133kg", src: "png/KAWASAKI/UX120-E001-C52-TMC-SPT.ini.png", date:"2021-1-21"},
{id: "UX120-E001-C52-TMC-SPT.ini", maker: "KAWASAKI", reach: "2800mm", payload: "120kg", src: "png/KAWASAKI/UX120-E001-C52-TMC-SPT.ini.png", date:"2021-11-01"},
{id: "UX120-E001-C52-TMC-SPT.ini", maker: "NACHI", reach: "2100mm", payload: "166kg", src: "png/KAWASAKI/UX120-E001-C52-TMC-SPT.ini.png", date:"2021-12-01"},
{id: "UX120-E001-C52-TMC-SPT.ini", maker: "YASKAWA", reach: "800mm", payload: "133kg", src: "png/KAWASAKI/UX120-E001-C52-TMC-SPT.ini.png", date:"2022/1/01"},
{id: "UX120-E001-C52-TMC-SPT.ini", maker: "YASKAWA", reach: "2000mm", payload: "120kg", src: "png/KAWASAKI/UX120-E001-C52-TMC-SPT.ini.png", date:"2022/1/11"},
{id: "UX120-E001-C52-TMC-SPT.ini", maker: "FANUC", reach: "1100mm", payload: "166kg", src: "png/KAWASAKI/UX120-E001-C52-TMC-SPT.ini.png", date:"2022/11/01"},
{id: "UX120-E001-C52-TMC-SPT.ini", maker: "NACHI", reach: "2400mm", payload: "133kg", src: "png/KAWASAKI/UX120-E001-C52-TMC-SPT.ini.png", date:"2022/11/01"},
{id: "UX120-E001-C52-TMC-SPT.ini", maker: "KAWASAKI", reach: "2000mm", payload: "120kg", src: "png/KAWASAKI/UX120-E001-C52-TMC-SPT.ini.png", date:"2022/12/01"},
{id: "UX120-E001-C52-TMC-SPT.ini", maker: "FANUC", reach: "2200mm", payload: "166kg", src: "png/KAWASAKI/UX120-E001-C52-TMC-SPT.ini.png", date:"2022/12/21"},
{id: "UX120-E001-C52-TMC-SPT.ini", maker: "YASKAWA", reach: "2100mm", payload: "133kg", src: "png/KAWASAKI/UX120-E001-C52-TMC-SPT.ini.png", date:"2023/1/01"},
{id: "UX120-E001-C52-TMC-SPT.ini", maker: "YASKAWA", reach: "1000mm", payload: "120kg", src: "png/KAWASAKI/UX120-E001-C52-TMC-SPT.ini.png", date:"2023/3/01"},
{id: "UX120-E001-C52-TMC-SPT.ini", maker: "FANUC", reach: "2300mm", payload: "166kg", src: "png/KAWASAKI/UX120-E001-C52-TMC-SPT.ini.png", date:"2023/3/03"},
{id: "UX120-E001-C52-TMC-SPT.ini", maker: "NACHI", reach: "1000mm", payload: "133kg", src: "png/KAWASAKI/UX120-E001-C52-TMC-SPT.ini.png", date:"2023/3/13"},
{id: "UX120-E001-C52-TMC-SPT.ini", maker: "KAWASAKI", reach: "2000mm", payload: "120kg", src: "png/KAWASAKI/UX120-E001-C52-TMC-SPT.ini.png", date:"2023/10/01"},
{id: "UX120-E001-C52-TMC-SPT.ini", maker: "FANUC", reach: "900mm", payload: "166kg", src: "png/KAWASAKI/UX120-E001-C52-TMC-SPT.ini.png", date:"2023/10/13"},
{id: "UX120-E001-C52-TMC-SPT.ini", maker: "YASKAWA", reach: "800mm", payload: "133kg", src: "png/KAWASAKI/UX120-E001-C52-TMC-SPT.ini.png", date:"2023/10/30"},
];

//ルーティングの設定
app.get('/', (req, res) => {
    res.render('index.ejs');
    });

app.get('/main', (req, res) => {
    res.render('main.ejs', { robots: robots });
    });

app.get('/convert', (req, res) => {
    res.render('convert.ejs',);
    });

app.listen(port, () => {
console.log(`Server running at http://localhost:${port}`);
});


app.use((req, res, next) => {
    res.status(404).send('404 Not Found');
    });