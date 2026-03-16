// 인자 전달시 객체형태로 전달
// 객체 형태로 인자를 받을 때 기본값을 설정할 수 있다

// 1. 일반적인 매개변수로 받을 때 (호출할 때 객체가 아니라 개별 인자로 넘겨야 함)
function addContact1(name, phone, email = '이메일없음', age = 0) {
  console.log(name, phone, email, age);
}
// 올바른 호출: addContact1('이몽룡', '010-3434-8989');
// 만약 객체를 첫 번째 인자로 넘기면 name 위치에 객체가 통째로 들어가고 phone은 undefined가 됩니다.
addContact1('이몽룡', '010-3434-8989');

// 2. 객체 전체를 하나의 매개변수(contact)로 받을 때
function addContact2(contact) {
  // <- 매개변수 `contact`를 명시해야 합니다!
  if (!contact.email) contact.email = '이메일없음';
  if (!contact.age) contact.age = 0;
  let { name, phone, email, age } = contact;
  console.log(name, phone, email, age);
}
addContact2({ name: '이몽룡', phone: '010-3434-8989' });

// 3. 가장 권장되는 방식: 매개변수 자리에서 바로 "객체 구조 분해 할당" + "기본값 설정"
function addContact3({ name, phone, email = '이메일없음', age = 0 }) {
  // 호출 시 넘겨준 객체가 즉시 분해되어 각각의 변수에 들어가고, 없으면 기본값이 들어갑니다.
  console.log(name, phone, email, age);
}
addContact3({ name: '이몽룡', phone: '010-3434-8989' });
