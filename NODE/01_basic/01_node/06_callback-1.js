const order = (order) => {
  console.log(order + '주문 접수');
};
const display = (result) => {
  result = order.name;
  console.log(`${result} 완료!`);
};
order('아메리카노', display);
