const fs = require('fs'); // fs 모듈 가지오기

// 비동기 처리 (Promise 방식)
fs.promises
  .readdir('./')
  .then((files) => {
    console.log(files);
  })
  .catch((err) => {
    console.log(err);
  });
