// 미션. 파일을 읽어서 그 내용을 전달하는 서버 만들기
// 1. index.html 파일을 읽어서, 변수에 담아두고
// 3. req가 왔을때, 그 변수의 내용을 전달한다.

// 모듈 불러오기
const fs = require('fs');
const http = require('http');

// 파일 읽기
const indexHtml = fs.readFileSync('index.html', 'utf8'); //실제로는 예외 처리 해줘야함 지금은 무시시

// 웹서버 만들기
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    res.end(indexHtml);
});

// 서버 실행
server.listen(3000, () => {
    console.log('서버가 http://localhost:3000 에서 실행 중입니다.');
});
