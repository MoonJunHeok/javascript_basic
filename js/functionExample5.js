// 표준 내장함수
// const yn= confirm('안녕하세요?');
// if(yn){
//   console.log('안녕합니다');
// }else{
//   console.log('안녕 안합니다');
// }

// setTimeout(() => console.log('1초 후 실행되었습니다'), 1000);

// let second = 1;
// let timer = setInterval(() => {
//  document.write(`<h3>${second++} 초</h3>`);
// }, 1000);

// //10초 후 중지..
// setTimeout(() => {
//   clearTimeout(timer);
//   document.write(`<h1>중지됨</h1>`);
// }, 10000);

let money = '100원';
money= parseInt(money);
console.log(money + 100);

let result = 1000/'김기정';
if(isNaN(result)){
  console.log('NaN입니다');
}