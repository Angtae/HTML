const express = require('express')

const app = express();
const port = 3000;


app.get('/user', (req, res) => {
    res.send('헬로우, 메인페이지');
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id; //위에 가변 인자는 req.params 안에 담겨서 옴
    res.send('사용자 정보, ID: ${req.params.id}');
});

app.get('/search', (req,res) => {
    const keyword = req.query.keyword; //쿼리 파라미터는 req.query 안에 담겨서 옴
    const category = req.query.category;

    res.send('키워드: ${keyword}, 카테고리: ${category}');
});

app.listen(port, () => {
    console.log('서버 레디 on ${port}')
});