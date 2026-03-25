const fs = require('fs');

const path = require('path');

const filePath = path.join(__dirname, 'example.txt');
const savePath = path.join(__dirname, 'text-1.txt');
const data = fs.readFileSync(filePath, 'utf-8');
if (fs.existsSync(savePath)) {
  console.log('파일이 이미 존재합니다');
} else {
  //없을 땐 생성
  fs.writeFileSync(savePath, data);
}
