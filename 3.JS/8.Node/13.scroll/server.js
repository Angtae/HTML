const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 3000;

const data = Array.from({length : 200}, (_, i) => `Item ${i+1}`);

app.use(morgan('dev'));
app.use(express.static('public'));

app.get('/get-items', (req, res) => {
    // 1. 원하는 갯수만큼만 보내주려면 어떻게 해야하는 가
    //   입력 파라미터를 어떻게 정해야하는지지
    // Query 파라미터로 get으로 start = 10,end=20라는 변수에 담아줄거다
    
    const { start, end } = req.query;
    //= const start = req.query.start;
    //= const end = req.query.end;

    // const userItems = [];
    // for( let i = start; i < end; i++){
    //     userItems.push(data[i])
    // }
    // console.log(userItems);
    // 2-1 어떻게 나눌까
    const userItems = data.slice(start, end);

    res.json(userItems);
});

app.listen(port, () => {
    console.log('서버 레디');
});