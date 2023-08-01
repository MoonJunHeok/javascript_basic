//함수 리터럴 표현식   
// 익명함수 (값으로 들어가는 함수에 이름 빼도되는데 그렇게하면 익명함수가 된다.)
let myFunction = function (message) {
  console.log(message);  
}



function doTask(fn){
  //fn(); = 콜백함수......
  let some = 'sdf';
  fn(some);
}

//함수 호출
myFunction('함수 리터럴 표현식입니다..');

doTask(myFunction);