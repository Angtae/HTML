const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));
app.use(morgan('dev'));

app.post('/api/chat', (req, res) => {
    const question = req.body.question;
    console.log('사용자 질문:', question);
    res.json({ answer: `Echo: ${question}` });
});

app.listen(port, () => {
    console.log(`서버 실행중! http://localhost:${port}`);
});
