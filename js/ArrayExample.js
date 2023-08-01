
//생성자함수방식
// let array = new Array();

//배열 리터럴표현식
let array = [];
array.push(10);
array.push('김기정바보');
array.push(new Student(10,'김기정',50,40,30));
array.push(new Student(10,'윤동진',10,20,60));
array.unshift(new Student(10,'박동진',90,75,21));

for (const value of array) {
   console.log(value);
}

console.log(array[0]);
// console.dir(array);
console.log(array.length);

// delete array[0];
array.shift();
// array.pop();
console.dir(array);








