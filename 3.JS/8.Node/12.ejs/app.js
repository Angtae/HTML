const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// 탬플릿 엔진 설정... ejs 라는걸 사용할 예정
app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    //res.send(path.join(__dirname,'index.html'));
    res.render('index', {title: '나의 타이틀', message: 'EJS 학습중입니다.'});
});

app.listen(port, () => {
    console.log('서버 레디');
});