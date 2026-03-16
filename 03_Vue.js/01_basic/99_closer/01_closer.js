// 클로저
// - 반환된 내부함수가 자신이 선언됐을때의 환경인 스코프를 기억하여,
// 자신이 선언되었을떄의 환경 밖에서도 스코프에 접근 할 수 있는 함수

function outer() {
  let count = 0;
  function inner() {
    count++; // outer 함수의 지역변수

    console.log(count);
  }
  return inner;
}
outer()();
outer()();
outer()();

const counter = outer();// 반환 받은 inner 함수
counter()
counter()
counter()