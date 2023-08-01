// for in 문
// 배열 리터럴(선언,생성 초기화 동시에)
let array = [3,2,1,5,6,3];
for (let i = 0; i < array.length; i++) {
  const num = array[i];
  console.log(num);
}

for (let i in array) {
  // console.log(i);
  console.log(array[i],i);
}
//JAVA의 향상 FOR문과 동일
for (let num of array) {
  console.log(num);
}