const path = require('path');

const ext = path.extname(__filename);
console.log('파일확장자', ext);

const parsedPath = path.parse(__filename);
console.log(parsedPath);

const base = path.basename(__filename);
console.log('파일 이름(확장자 포함)', base);

const name = path.basename(__filename, ext);
console.log('파일 이름(확장자 제외)', name);

const dir = path.dirname(__filename);
