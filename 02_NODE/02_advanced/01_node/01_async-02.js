let likePizza = true;

const pizza = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (likePizza) {
      resolve('피자를 주문합니다');
    } else {
      reject('피자를 주문하지 않습니다');
    }
  }, 1000);
});
pizza.then((result) => console.log(result)).catch((error) => console.log(err));
