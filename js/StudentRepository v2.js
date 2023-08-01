// 여러 학생 목록 관리 객체
function StudentRepository(){
  // this = {}
this.students = new Array();
// this.students = []; 위와 같은 의미
  // return this;
}

// 학생추가
StudentRepository.prototype.addStudent = function(student){
  this.students.push(student);
}
// 학생 전체목록
StudentRepository.prototype.getStudents = function(){
  return this.students;
}
// 학번으로 학생 검색
StudentRepository.prototype.findBySsn = function(ssn){
  // return this.students.filter(student => student.ssn == ssn);
  // return this.students.find( student => student.ssn === ssn ? true: false);
  //조건삼항연산자를 js에서만 이렇게 입력 가능하다 (유연함)
  return this.students.find(student => student.ssn === ssn || false);
}
//이름으로 학생 검색
StudentRepository.prototype.findByName = function (name) {
  return this.students.filter(student => student.name === name || '' );
}
//배열에서는 delete로 삭제하지 않는다.
//학번으로 학생 삭제
StudentRepository.prototype.removeBySsn = function(ssn){
  let deleted = false;
  this.students.forEach((student,index) => {
    if (student.ssn == ssn){
      this.students.splice(index, 1)
          deleted = true;
    }
  });  
  return deleted;
}
//평균 범위로 검색
StudentRepository.prototype.findByRange = function(start,end){
  let list = [];
 this.students.forEach(student => {
    if(student.getAverage() >=start && student.getAverage() <= end){
      list.push(student);
    }
  });
  return list;
}
// ?정렬 하여 전체 검색  (콜백함수 이용해서 역할만 지정)
StudentRepository.prototype.findAllBySort = function(fn){
  return this.students.sort(fn);
}
//임시테스트
let studentRepository = new StudentRepository();
studentRepository.addStudent(new Student(10,'김기정',90,80,43));
studentRepository.addStudent(new Student(11,'최정',20,50,10));
studentRepository.addStudent(new Student(12,'최정',20,50,10));
studentRepository.addStudent(new Student(13,'평균6',10,30,10));
studentRepository.addStudent(new Student(14,'60대',57,90,54));
studentRepository.addStudent(new Student(15,'평60',69,90,30));
studentRepository.addStudent(new Student(16,'균육',60,90,30));
studentRepository.addStudent(new Student(17,'육십대',100,50,36));

let allList = studentRepository.getStudents();
for (const student of allList) {
  console.log(student.toString());
}
console.log('=============================================');
let studentSsn = studentRepository.findBySsn(10);
console.log(studentSsn);

let studentName= studentRepository.findByName('균육');
console.log(studentName);

let remove = studentRepository.removeBySsn(11);
if(remove){
  console.log('삭제성공');
}else{
  console.log('삭제 실패');
}

// 전체조회
console.log(studentRepository.getStudents());
console.log('======================== 평균조회 테스트 ======================');
let search = studentRepository.findByRange(60,70);
console.log(search);
console.log('======================== 정렬 테스트 ======================');
// 평균 내림차순으로 정렬하여 목록 보여주고싶다..
let sortedList= studentRepository.findAllBySort((student1, student2)=> student1.getAverage() - student2.getAverage());
sortedList.forEach(student => console.log(student.toString()));

