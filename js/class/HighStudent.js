import { Student } from "./Student.js";

class HighStudent extends Student {
  constructor(ssn, name, korean, english, math, age) {
    //this = {};
    super(ssn, name, korean, english, math);
    this.age = age;
    //return this;
  }
  // 편의상 setter/getter 생략

  // 메서드 오버라이딩
  toString() {
    return super.toString() + `\t ${this.age}`;
  }
}

// let highStudent = new HighStudent(10, '김기정', 54, 50, 80, 25);
// console.log(highStudent.toString());

// let string = new String('문자열')\
export {HighStudent}