// 별다른 말이 없으면 우리는 commonjs 를 쓸거임

const fs = require('fs');

function myCallbackFunction(err,data) {
    if (err) {
        console.error('에러가 있음: 에러는:', err);
    }else {
        console.log('에러가 없음, 데이터는:', data);
    }
}

fs.readFie('example.txt', myCallbackFunction);