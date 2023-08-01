// 템플릿 스트링
let na = '아아'
let nae = '김기정';
let message = `템플릿 스트링 ${nae + na}`;
console.log(message);

// typeof 연산자
let age = 10;
console.log(typeof age);

// 특수 숫자 리터럴 (키워드)
console.log(10/0); //JAVA에서는 Arithmatic Exception발생, 0.0으로 나눠야 Infinity 출력
console.log('문자'/10);

//논리형
let flag = false;

let flag2 = 2;  //숫자는 음수든 양수든 0이외에는 참, 0은 거짓,''도 거짓
if (flag2) {
  console.log('참입니다');
}

// 자바스크립트는 자동형변환이 엄청 많이 발생한다..
console.log('1000' +'10');