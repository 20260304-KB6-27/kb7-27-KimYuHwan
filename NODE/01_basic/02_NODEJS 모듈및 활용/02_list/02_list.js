const fs = require('fs'); // fs 모듈 가져오기

// 비동기 방식(Promise)
fs.promises
  .readdir('./')
  .then((files) => {
    console.log(files);
  })
  .catch((err) => {
    console.log(err);
  });
