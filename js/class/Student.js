//학생객체 생성을 위한 틀(CLASS) 
// export

class Student {

  constructor(ssn, name, korean, english, math) {
    //this = {};
    this.ssn = ssn;
    this.name = name;
    this.korean = korean;
    this.english = english;
    this.math = math;
    //return this;
  }
  // 정적 속성 및 메서드 추가
  static schoolName = 'EZEN 초등학교';

  static showSchoolName() {
    console.log(Student.schoolName);
  };

  getSum() {
    return this.korean + this.english + this.math;
  }
  getAverage() {
    return this.getSum() / 3;
  }

  toString () {
    return `${this.ssn}\t ${this.name} \t ${this.korean} \t ${this.english} \t ${this.math} \t ${this.getSum()} \t ${this.getAverage()}`;
  }
}

// let student = new Student(10, '김기정', 90, 80, 50);
// console.log(student.toString());

// console.dir(Student);

// // // 프로토타입 상속 체인 검증 
// console.log('name' in student);
// console.log('valueOf' in student);
// // // Object ProtoType객체의 메소드 재사용
// console.log(student.hasOwnProperty('name'));
// console.log(student.hasOwnProperty('valueOf'));

// Student.showSchoolName();

let xxx = 500;
function yyy() {
  console.log('헐~~~');
}
export { Student, xxx, yyy };