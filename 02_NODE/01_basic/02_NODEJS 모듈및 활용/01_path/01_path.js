const path = require('path');

// import path from 'path'; //esm방식
const fullPath = path.join('some', 'work', 'ex.txt');
console.log(fullPath);

// path 모듈
// - 파일경로나 디렉토리 경로를 다루는 모듈
// - 운영 체제간에 경로를 구분하는 구분자가 다르지만 통일 시켜줌
