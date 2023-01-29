const path = require('path');

const express = require('express');

const router = express.Router();

const rootDir = require('../util/path');
const adminData = require('./admin');

router.get('/', (req, res, next) => {
  /* 정적 html 전송 방법 */
  // console.log('Shop.js', adminData.products);
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));

  /* 동적 템플릿 방법 */
  const products = adminData.products;
  res.render('shop', { prods: products, pageTitle: 'Shop', path: '/' }); //pug 파일 랜더

  /**
   * join 메서드는 여러 인자를 하나의 경로로 합쳐줌
   * __dirname - 절대 경로를 이 프로젝트 폴더로 고정해주는 node.js의 전역변수
   */
});

module.exports = router;
