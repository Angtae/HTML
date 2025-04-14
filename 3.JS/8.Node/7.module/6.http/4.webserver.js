const fs = require('fs');
const http = require('http');

const indexHtml = fs.readFileSync('index.html', 'utf8');

const server = http.createServer((req, res) => {
    console.log(res);
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    res.end(indexHtml);
});

server.listen(3000, () => {
    console.log('서버가 http://localhost:3000 에서 실행 중입니다.');
});
