const p = new Promise(( resolve, reject) => {
setTimeout(()=> {
let num = Math.random(); //0~1사이의 난수 발생
if (num >= 0.8) {
 resolve(num);
 console.log("성공");
 return;
}else{
    reject(num);
    console.log("실패")
    return;
}
}, 2000)
})
p.then ((result)=> {
console.log("처리 결과 : ", result)
})
.catch ((error)=>{
console.log("오류 : ", error)
})
console.log("## Promise 객체 생성!");

// ## Promise 객체 생성!
// 처리 결과 : 0.32435778048671526
// ## Promise 객체 생성!
// 오류 : 생성된 숫자가 0.8이상임- 0.811963599046789