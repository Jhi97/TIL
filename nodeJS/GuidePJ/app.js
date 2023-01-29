const http = require('http');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const rootDir = require('./util/path');

const shopRoutes = require('./routes/shop');
const adminData = require('./routes/admin');
const { nextTick } = require('process');

app.set('view engine', 'ejs'); //express 템플릿 엔진 설정
app.set('views', 'views'); //템플릿 경로 설정, 루트(기본설정) + String

app.use(bodyParser.urlencoded({ extended: false })); // 자동 next함수 호출
app.use(express.static(path.join(__dirname, 'public'))); //public에 접근 가능하게 설정

app.use(shopRoutes);
app.use('/admin', adminData.routes); // 경로 필터

app.use((req, res, next) => {
  //res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
  res.render('404', { pageTitle: '404' });
});

// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000); //createServer & listen 통합
