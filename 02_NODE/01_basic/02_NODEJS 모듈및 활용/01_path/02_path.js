const path = require('path');

// import path from 'path'; //esm방식
// __filename -> 사용불가
// import { fileURLToPath } from 'url';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const fullPath = path.join(__dirname, 'some', 'work', 'ex.txt');
// console.log(fullPath);

// path 모듈
// - 파일경로나 디렉토리 경로를 다루는 모듈
// - 운영 체제간에 경로를 구분하는 구분자가 다르지만 통일 시켜줌

const fullPath = path.join(__dirname, 'some', 'work', 'ex.txt');
console.log(`파일절대경로:${fullPath} `);
//
// - 절대경로 : root 디렉토리부터 시작하는 경로
// - 상대경로 : 현재 작업 디렉토리 기준 경로
const dir = path.dirname(__filename);
console.log(`폴더까지만 : ${dir}`);
console.log('-----------------------------------');
console.log(`현재 작업 디렉토리 : ${process.cwd()}`);


