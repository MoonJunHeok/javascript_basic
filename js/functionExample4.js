// 콜백함수는 왜 써야 하나?
function calculate(fn, a, b){
//호출하는 쪽에서 데이터 처리
return fn(a, b);
}

// 함수 호출
 let num1 = 300, num2 = 500;

let result = calculate(function (x,y){
  return x+y;
}, num1, num2);

//위의 함수(같은 함수코드) 화살표함수로 변경
result = calculate((x,y) =>x+y, num1,num2);
console.log(result);

result = calculate(function(x,y){
  return x*y;
}, num1, num2);

console.log(result);
// 자바에서 인터페이스로 다형성 구현 하는것을 JS에서는 콜백함수를 이용한다.



//함수 즉시호출(만들자마자 바로 호출)
// 메모리 상주하지않는다. 함수를 괄호로 묶고 호출로 ();
(function doTask() {
  console.log('나는 즉시호출되는 함수입니다..');
})();

