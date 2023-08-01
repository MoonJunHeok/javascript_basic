import { Student , yyy, xxx} from "./Student.js";
import { HighStudent } from "./HighStudent.js";
// import { yyy } from "./Student.js";
let student = new Student(10, '김기정', 90, 80, 50);
console.log(student.toString());
console.log(student.getAverage());

let highStudent = new HighStudent(10, '김기정', 54, 50, 80, 25);
console.log(highStudent.toString());

yyy();
console.log(xxx);