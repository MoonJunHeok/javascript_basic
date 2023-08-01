
// 전역변수 (JAVA에서 static variable과 비슷한 개념)
let global = '전역변수입니다..';


console.log(sum(900, 200));



// 사용자 정의 함수
function sum(x, y) {
  return (x + y)
}


function printGugudan() {
  document.write('<h2>for문을 이용한 구구단 출력</h2>');
  document.write("<table border='1'>");
  for (let i = 2; i <= 9; i++) {
    document.write('<tr>');
    for (let j = 1; j <= 9; j++) {
      document.write(`<td> ${i}*${j} = ${i * j}</td>`);
    }
    document.write('<tr>');
  }
  document.write('</table>');
}



// var = 함수스코프, let = 
function doTask() {
  let some = 100;
  let i = 0;
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log(i);
  // return undefined; 코드가 항상 추가되어있다.
}


// 디폴트 파라메터
function sendMessage(message = "헐....") {
  console.log(message + "를 서버에 전달합니다....");
}
sendMessage("김기정 바보");
sendMessage();

// Rest Parameter(비정형 인자)
function sum(...nums) {
  let result = 0;
  for (const num of nums) {
    result += num;
  }
  return result;
}
sum(1);
sum(1,2);
sum(1,2,3);
const res = sum(1,2,3,4,1000,4354454,454545454,545454);
console.log(res);



// 함수 호출
let result = sum(10, 5);
console.log(result);
printGugudan();


//함수호출시 매개변수,전달인자 갯수가 일치하지않아도 호출은 가능하다.
let aa = sum(10);
console.log(aa);



let resul = doTask();
console.log(resul);




























