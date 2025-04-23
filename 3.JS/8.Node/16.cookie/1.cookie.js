const http = require('http');

http.createServer((req, res) => {
  console.log(req.url, req.headers.cookie);
  res.writeHead(200, {
    'Set-Cookie': 'mycookie=test'
  });
  res.end('쿠키가 설정되었습니다!');
}).listen(3000, () => {
  console.log('서버레디');
});
