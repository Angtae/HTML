const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.end(`<h1>안녕하세요, 이것은 Node.js 웹서버 입니다.</h1>`);
});

server.listen(3000, () => {
    console.log('서버가 http://localhost:3000 에서 실행 중입니다.');
});
