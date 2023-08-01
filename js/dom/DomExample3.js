// 속성 제어하기
let aElement = document.querySelector('a');
let value = aElement.getAttribute('href');
console.log(value);
aElement.setAttribute('href','https://www.google.co.kr');

// NODE 생성 및 ㅁ연결
// let liE = document.createElement('li');
// let text = document.createTextNode('안녕하세요');
// liE.appendChild(text);
// document.querySelector('ol').appendChild(liE);

// node.insertBefore(n,n) <- 사이에 끼워넣기



// document.querySelector('ol').textContent = '졸지마;';
// document.querySelector('ol').innerText = '<b>졸지마;</b>';
document.querySelector('ol').innerHTML = '<b>졸지마;;;</b>';
console.log(document.querySelector('ol').textContent);

function show() {
  let div = '<div>댓글내용입니다...</div>';  
  let article = document.querySelector('article');
//  for(i = 0; i <= 2; i++){
  //  body.insertAdjacentHTML('beforeend',div);
//  }
 article.innerHTML = div;
}

