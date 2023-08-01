let x = 88.9426358.toFixed(2);
console.log(Number.MAX_VALUE);
console.log(x);

// x = new Number(x);
// console.log(x.toFixed(2));


let y = '34343';
// parseInt(y); new가 없으면 이거랑 같아진다.
//new 연산자를 사용하지 않으면 생성자함수가 아니라 형변환함수로 동작한다
let result = Number(y);

console.log(result);
