// 스타일 적용하기 (동적으로)
// let list = document.querySelectorAll('h1');
// list.forEach(element => {
//   element.style.color = '#fff';
//   element.style['backgroundColor'] = 'blue';
// });


 //이렇게 되면 
// let list = document.querySelectorAll('h1');
// list.forEach(element => {
//   element.className = 'head';
// });

// ex)    <h1 class="a b c head"></h1> 등이 가능하게하는건 classList
//없던 클래스에는 덮어쓰고 있던 클래스에는 추가..
//remove는 삭제
let list = document.querySelectorAll('h1');
list.forEach(element => {
  element.classList.add('head');
  element.classList.remove('head');
  // setInterval(() => {
  //   element.classList.toggle('head');
  // },1000);
  element.classList.toggle('head');
});








let lisw = document.querySelectorAll('h1');
lisw.forEach(element => {
  element.addEventListener('mouseover',() => 
  element.style.backgroundColor ='blue');
  element.addEventListener('mouseout',() => 
element.style.backgroundColor ='');  
});
