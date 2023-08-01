// console.clear();
console.dir(Student); // Student의 최상위 객체는 Function 프로토타입객체
console.dir(student1); //student의 최상위 객체는 Object 프로토타입 객체

let string = new String('김기정입니다.');
console.dir(string);
console.dir(String);

let array = [5,3,6];
console.dir(array);


// 객체 리터럴 표현식을 이용한 객체 즉시 생성
let person = {
  name : '윤동진',
  age : 28,
  doTeach : function (){
 console.log('프로그램 강의합니다..');
  }
};

// 위와 같은코드임
// let person = new Object();
// person.name = '윤동진';
// person.age = 28;
// person.doTeach = function(){
//   console.log('프로그램 강의합니다..');
// }
// console.clear();
console.log(person.constructor === Object);
console.dir(person);
console.dir(person.hasOwnProperty('doTeach'));