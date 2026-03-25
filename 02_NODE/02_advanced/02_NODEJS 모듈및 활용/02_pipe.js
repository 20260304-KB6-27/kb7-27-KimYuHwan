const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'readMe.txt');
const rs = fs.createReadStream(filePath, 'utf-8');
const savePath = path.join(__dirname, 'writeMe.txt');
const ws = fs.createWriteStream(savePath, 'utf-8');
// 파이프(pipe)
// - 스트림을 연결하는 스트림
// - 
rs.pipe(ws);