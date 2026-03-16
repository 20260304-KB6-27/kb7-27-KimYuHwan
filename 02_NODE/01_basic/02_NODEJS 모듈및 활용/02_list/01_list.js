const fs = require('fs'); // fs 모듈 가지오기

//동기방식
let files = fs.readdirSync('./');
console.log(files);

//콜백 방식
fs.readdir('./', (err, files) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(files);
});
