let score = prompt('점수를 입력하세요', 0); //prompt의 리턴값은 string이다. 자유로운 형변환이 있어서 가능하다
let number = score/10;
number = Math.floor(number);
switch (number) {
  case 10: 
  case 9: console.log('수'); break;
  case 8: console.log('우'); break;
  case 7: console.log('미'); break;
  case 6: console.log('양'); break;
  default: console.log('가'); break;
}