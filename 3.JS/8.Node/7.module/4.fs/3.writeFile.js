// 별다른 말이 없으면 우리는 commonjs 를 쓸거임

const fs = require('fs');

console.log('파일 읽기 전');

const data = "내가 파일에 쓰고싶은 내용용"

fs.writeFile('example.txt', data, 'utf-8', (err) => {
    if (err) {
        console.log('에러가 있음, 에러는:', err);
    } else {
        console.log('에러가 없음, 쓰기완료');
    }
});

console.log('파일 읽은 후');