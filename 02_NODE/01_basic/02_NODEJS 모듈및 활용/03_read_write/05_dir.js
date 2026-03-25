const path = require('path');
const fs = require('fs');
const testPath1 = path.join(__dirname, 'test');

if (fs.existsSync(testPath1)) {
  console.log('test 폴더가 존재합니다');
} else {
  fs.mkdir(testPath1, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('test 폴더가 생성되었습니다');
  });
}

const testPath2 = path.join(__dirname, 'test2', 'test3', 'test4');
if (fs.existsSync(testPath2)) {
  console.log('test2/test3/test4 폴더가 존재합니다');
} else {
  fs.mkdir(testPath2, { recursive: true }, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('test2/test3/test4 폴더가 생성되었습니다');
  });
}
