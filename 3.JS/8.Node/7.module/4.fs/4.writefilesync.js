// 별다른 말이 없으면 우리는 commonjs 를 쓸거임

const fs = require('fs');

const data = '내가 쓰고 싶은 내용 아무거나... \n두번째줄\n세번째줄';

console.log('파일 읽기 전');

fs.writeFileSync('example.txt', data, {encoding:'utf8', flag:'a'});

console.log('파일 읽은 후');