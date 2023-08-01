console.dir(window.document.firstChild);
// html을 의미하는코드
console.dir(document.firstElementChild);
console.dir(document.firstElementChild.constructor);

//#1.DOM Tree 계층 구조로 검색
// Node의 공통속성 3개
console.log(document.firstElementChild.nodeType === Node.ELEMENT_NODE); //1
console.log(document.firstElementChild.nodeName); //HTML
console.log(document.firstElementChild.nodeValue); // null

// body 요소 접근 (html에서 엔터(빈공백)도 자식으로 인식한다.)
console.log(document.firstElementChild.lastElementChild.nodeName);

// #2.get메소드로 특정 요소 접근 (html Collection으로 반환받음)
let pArray = document.getElementsByTagName('p');
// 리턴타입은 배열이 아닌 유사배열이다...(배열객체의 메소드 사용이 불가하기 때문에 유사배열이라고 한다.)for in나 for in 문은 사용가능하다.
console.log(pArray.constructor);
for (const element of pArray) {
  console.log(element.nodeName);
}

// class명이나 id 명으로 접근
let pElement = document.getElementById('myP');
console.dir(pElement);
let htmlCollection = document.getElementsByClassName('container');
console.dir(htmlCollection);  

console.clear();

// #3. CSS 선택자를 이용한 검색
// console.dir(document.querySelector('p'));  //여러개 중 첫번째 요소만 얻어온다
// console.dir(document.querySelectorAll('p'));  //NodeList라는 DOM Spec 에 있는 객체(마찬가지로 forEach는 사용 불가하다.)
let nodeList = document.querySelectorAll('p');
nodeList.forEach(element => {
console.log(element.nodeName);
});
let pEl = document.querySelector('#myP');
console.log(pEl.nodeName);

let textNode = pEl.firstChild;
console.log(textNode.nodeName);
console.log(textNode.nodeValue);
// alert(textNode.nodeValue);

//코드 체이닝
let divE = document.querySelector('.container').firstChild.nodeValue;
console.log(divE);
// nodeValue 혹은 data로 사용한다.. li:first-child 가져오고 그 안의 값을 위해서 firstChild 사용
console.log(document.querySelector('li:first-child').firstChild.data);
console.log(document.querySelector('li:last-child').firstChild.data);
let List = document.querySelectorAll('li:nth-child(2n+1)');
List.forEach(element => {
  console.log(element.firstChild.nodeValue)});