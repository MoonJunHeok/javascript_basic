// 여러 학생 목록 관리 객체
function StudentRepository(){
  // this = {}
this.students = new Array();
// this.students = []; 위와 같은 의미

// 학생추가
this.addStudent = function(student){
  this.students.push(student);
}

// 학생 전체목록
this.getStudents = function(){
  return this.students;
}



// 학번으로 학생 검색
this.findBySsn = function(ssn){
  return this.students.filter(student => student.ssn == ssn);
}

//이름으로 학생 검색
this.findByName = function (name) {
  return this.students.filter(student=> student.name == name);
  // return this.students.filter(function(student) {
    // return student.name === name;
  //  });
}

//배열에서는 delete로 삭제하지 않는다.
//학번으로 학생 삭제
this.removeBySsn = function(ssn){
  let remove = false;
  let array = this;
  this.students.forEach(function(student,index){
    if(student.ssn == ssn){
      array.students.splice(index,1);
      remove = true;
      }
    });
    return remove;
  }

 this.removeByName = function(n) {
    let deleted = false;
    this.students.forEach((student, index) => {
      if (student.name == n) {
        this.students.splice(index, 1)
        deleted = true;
      }
    });
    return deleted;
  }

//평균 범위로 검색
this.findByRange = function(start,end){
  let result = this.students.filter(function(student){
    let average = new Student().getAverage.call(student);
    return average >= start && average <= end;
  });
return result  
}
  // return this;
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



console.clear();
let remove= studentRepository.removeByName('균육');
console.log(remove);
 if(remove){
    console.log('삭제성공');
  }else{
    console.log('삭제 실패');
  }
console.log(studentRepository.getStudents());

// let remove = studentRepository.removeBySsn(10);
// if(remove){
//   console.log('삭제성공');
// }else{
//   console.log('삭제 실패');
// }

// // 전체조회
// console.log(studentRepository.getStudents());

let search = studentRepository.findByRange(60,70);
console.log(search);


