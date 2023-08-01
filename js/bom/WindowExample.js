function Student(ssn,name,korean,english,math){
  //this = {};
  this.ssn = ssn;
  this.name = name;
  this.korean = korean;
  this.english = english;
  this.math = math;
  //return this;
  console.log(this);

  }

let student = new Student(10,'sas',123,22,44);





// BOM 의 구조
console.dir(window);

let myWindow = open('../../hello.html', '내창');
if(!myWindow){
  alert('팝업 해제하세요');
}
// myWindow.close();


