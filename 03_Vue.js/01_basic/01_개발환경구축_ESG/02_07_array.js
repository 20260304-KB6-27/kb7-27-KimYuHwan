// // 배열 구조분해 할당

// const animals = ['bear', 'tiger', 'giraffe', 'elephant', 'lion'];
// // 1. 기본적인 배열 구조분해 할당
// const [ani1, ani2, ani3] = animals;
// // console.log(ani1, ani2, ani3);

// // 2. 나머지 요소 가져오기
// const [first, ...rest] = animals;
// console.log(first);
// console.log(rest);

// // 3. 기본값 설정
// const zoo = ['panda', 'koala'];
// const [animal1, animal2, animal3 = 'monkey', animal4 = 'penguin'] = zoo;
// console.log(animal1, animal2, animal3, animal4);
// // 출력: panda koala monkey penguin
// // 원본 배열(zoo)에는 2개의 요소밖에 없으므로, animal3과 animal4에는 요소가 할당되지 않아 undefined가 됩니다.
// // 이때 기본값(= 'monkey', = 'penguin')을 설정해두면 undefined 대신 그 기본값이 변수에 들어갑니다.

// // 4. 중첩된 배열
// const arr = [1, [2, 3], 4];
// const [num1, numArr, num2] = arr;
// console.log(num1, numArr, num2);

let arr = [10, 20, 30, 40];
const [a1, a2, a3] = arr;
console.log(a1, a2, a3);
let p1 = { name: '홍길동', age: 20, gender: 'M' };
const { name: n, age: a, gender } = p1;
console.log(n, a, gender);
