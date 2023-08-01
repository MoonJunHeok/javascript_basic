let score = prompt('점수를 입력하세요', 0); //prompt의 리턴값은 string이다. 자유로운 형변환이 있어서 가능하다
console.log(typeof score);
// let score = 88;


if (score >= 60) {
  console.log('합격..');
} else {
  console.log('불합격..');
}


if (score >= 90) {
  console.log('수');
} else if (score >= 85) {
  console.log('우');
} else if (score >= 80) {
  console.log('미');
} else if (score >= 75) {
  console.log('양');
} else {
  console.log('가');
}