// 중첩함수 (HELPER) 정의
function main() {
  console.log('주 기능입니다....');

  function helper(num,numm) {
    return (Math.sqrt(Math.pow(num, 2) + Math.pow(numm, 2)));
  }

let x = 10;
let y = 20;
let result = helper(x,y);
console.log(result);
}

main();