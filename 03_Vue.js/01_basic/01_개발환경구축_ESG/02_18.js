const d1 = new Date();
let name = '홍길동';
let r1 = `${name} 님에게 ${d1.toDateString()} 에 연락했다.`;
console.log(r1);
// toDateString() 사용 하면 연월일 나옴 영어로
let product = '갤럭시S7';
let price = 199000;
let str = `${product} 의 가격은 ${price}원 입니다`;
console.log(str);
