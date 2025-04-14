const os = require('os');

console.log(os.hostname());
console.log('임시폴더경로:' ,os.tmpdir());
console.log('cpu 경로:',os.cpus());

const mem_in_gb = os.totalmem() / 1024 / 1024/ 1024;
console.log(os.platform());
console.log(os.version());
console.log(os.release());