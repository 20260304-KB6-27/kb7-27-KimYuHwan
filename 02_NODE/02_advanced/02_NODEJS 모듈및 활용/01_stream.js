const fs = require('fs');
const path = require('path');

// stream
// 데이터를 작은 단위로 나누어 처리하는 방식
// - readable -> 읽는 스트림(단방향)
// - wrtieable -> 쓰는 스트림(단방향)
// - duplex -> 읽고 쓰는 스트림(양방향)

const filePath = path.join(__dirname, 'readMe.txt');
const rs = fs.createReadStream(filePath, 'utf-8');
//stream
// stream 이벤트
// - data : 데이터를 읽을 떄 동작
// - end : 데이터를 다 읽었을 때 동작
// - error : 에러가 발생했을 떄 동작

const ws = fs.createWriteStream(path.join(__dirname, 'writeMe.txt'), 'utf-8');

rs.on('data', (chunk) => {
  console.log('새로운 청크 도착 : ');
  console.log('청크 길이 : ', chunk.length);
  console.log('청크 내용 : ', chunk);
})

  .on('end', () => {
    console.log('data 읽기 완료');
  });

rs.on('error', (err) => {
  console.error('error가 발생했습니다');
});

ws.on('data', (chunk) => {
  console.log(chunk);
});

ws.on('end', () => {
  console.log('쓰기 완료');
});

ws.on('error', (err) => {
  console.log(err);
});
