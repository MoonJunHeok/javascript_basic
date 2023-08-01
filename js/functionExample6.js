// 함수를 만드는 방법 3가지 
// #1. 함수 선언식
// #2. 함수 리터럴 표현식
// #3. Function 생성자 함수를 이용한 동적 함수 생성






// 스크립트 준비 단계에서 하는 동작
// 일급 객체 는 이것을 의미한다.
// 가장 먼저 생성
// function Function (){
//   ~~~~~~~~~~~
// }

//자바 스크립트 표준 내장객체는 Function 생성자함수에 의해 동적 생성된다.
// let Object = new Function('~~~~');
// let String = new Function('~~~~');
// let Date = new Function('~~~~');
// let Number = new Function('~~~~');
// let Boolean = new Function('~~~~');

//동적으로 만드는 함수 비정형인자, 매개변수와 실행문
let sum = new Function('x','y','return x + y');
let result = sum(10,20);
console.log(result);