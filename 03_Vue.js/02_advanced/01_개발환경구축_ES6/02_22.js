let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('first!');
  }, 1000);
});

p.then((msg) => {
  console.log(msg); // first!
  return 'second'; // 다음 then으로 넘길 값
})
  .then((msg) => {
    console.log(msg, '\nthird'); // second third
  })
  .catch((error) => {
    console.log('오류 발생 ==> ' + error);
  });
