let obj = { result: 0 };

// JavaScript this 바인딩 문제
obj.add = function (x, y) {
  function inner() {
    // this?
    this.result = x + y;
  }
  // 일반함수 호출시에 this는 전역객체를 참조
  // inner 함수의 this 는 obj 라는 객체가 아니라 그 바깥의 global 객체가 된다
  inner();
};
obj.add(3, 4);
console.log(obj);
console.log(result);


// 1. 화살표 함수 : 호출된 상위 객체의 this를 가리킴
// 화살표 함수의 this: 상위 스코프의 this

// bind()로 명시적으로 바인딩
// 함수의 this 값을 특정 객체에 영구적으로 바인딩한 새로운 함수를 반환
// 첫번째 인자로 전달된 객체가 this로 설정됨.


// inner 함수의 this를 obj 객체로 바인딩 하여 호출
inner.bind(obj)();
