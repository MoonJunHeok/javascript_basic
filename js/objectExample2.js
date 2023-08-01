// 생성자 함수 를 이용한 객체 틀 만들기
//  메소드는 다른방법으로 집어넣어야 한다.
// 사용방법은 자바와 비슷하나 방식은 완전 틀리다.

function Dog(name, age, kind){
  // this = {}; 라는 빈 객체가 만들어 져 아래 값을 집어넣고 리턴하게 되는 방식이다
  //속성(프로퍼티) 추가
  this.name = name;
  this.age = age;
  this.kind = kind;
  
  // 기능(메소드)추가
  this.cry = function(){
    console.log(`${this.name}강아지가 웁니다...`);
  }
  // return this;
}

console.log(Dog);

/*js의 new는 java의 new와 다르다. new 의 뜻은 생성자 함수에 
 리턴할 this를 생성하라는 명령어 로 생각하면 된다.*/
let dog = new Dog('루니',8,'비숑');
console.log(dog);
let dog2 = new Dog('꼬미',8,'스트릿')
console.log(dog2);
dog.cry();
dog2.cry();

// 자바스크립트 표준 객체(생성자 함수)를 사용하는 예제
let string = new String('김기정입니다...');
const count= string.length;
console.log(count);

let ssn = "680313-1234567";
let ch= ssn.charAt(7);
switch (ch) {
  case '1': console.log('남자'); break;
  case '2': console.log('여자'); break;
}
//java의 wrapper클래스와 비슷..
let number = new Number(10);
console.log(number);
let bool = new Boolean(true);
console.log(bool);
let today = new Date();
console.log(today.toLocaleTimeString());

//배열을 처리하기 위한 js의 Array객체를 제공함
//JS의 Array객체는 JAVA의 List, Set, Queue, Stack 기능이 들어있다.
let array = new Array();
console.log(array);





