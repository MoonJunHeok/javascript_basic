//학생객체 생성을 위한 틀(생성자함수) 

// 생성시 어딘가에 student의 protoType객체도 같이 생성되며 student는 프로토타입을 참조하는 형태이다.
function Student(ssn,name,korean,english,math){
//this = {};
this.ssn = ssn;
this.name = name;
this.korean = korean;
this.english = english;
this.math = math;
//return this;
}

//공통으로 사용(정적 속성 및 메소드 추가)
Student.schoolName = 'EZEN 초등학교';
Student.showSchoolName = function(){
  alert(Student.schoolName);
};



// 생성자 함수(객체)의 메소드를 student의 prototype객체에 할당
Student.prototype.getSum = function(){
  return this.korean + this.english + this.math;
}
Student.prototype.getAverage = function(){
  return this.getSum()/3;
}

// Object 프로토타입객체의 toString() 오버라이딩
Student.prototype.toString = function(){
  return `${this.ssn}\t ${this.name} \t ${this.korean} \t ${this.english} \t ${this.math} \t ${this.getSum()} \t ${this.getAverage()}`;
}
// 오버라이딩한 toString 삭제
// delete Student.prototype.toString;

let student1 = new Student(10,'김기정',90,80,50);
// console.log(student1.schoolName);
let student2 = new Student(10,'김기정',90,80,50);
let student3 = new Student(10,'김기정',90,80,50);

console.log(student1.toString()); //프로토타입 객체의 toString() 메소드 호출
console.log(student2.toString()); //프로토타입 객체의 toString() 메소드 호출
console.log(student3.toString()); //프로토타입 객체의 toString() 메소드 호출
//만약 student.toString 에서 ()을 빼면 호출이 아닌 참조에 불과해서 다른 값이 나옴
//자동완성에서 ()안뜨는이유 : 참조가 기본, 호출은 선택 / 참조를 하는 이유는 Object프로토타입에 접근할 수 있기때문


// 프로토타입 상속 체인 검증 
console.log('name' in student1);
// Object ProtoType객체의 메소드 재사용
console.log(student1.hasOwnProperty('name'));
//hasOwnProperty는 해당 객체에서만 찾고 in은 부모속성까지 검색한다.

console.log('valueOf' in student1);
console.log(student1.hasOwnProperty('valueOf'));
console.log(student1.toString());

//constructor 쓰임새
function doTask(object){
  // if(object.constructor === Student){
  if(object instanceof  Object){
    console.log('학생일 때만 수행하는 메소드입니다...');
  }
}
doTask(student1);

// Student.showSchoolName();
