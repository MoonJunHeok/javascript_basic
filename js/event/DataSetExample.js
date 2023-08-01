// data-cnt 속성값 읽기
const labels = document.querySelectorAll('label');
labels.forEach(label => {
    console.dir(label.dataset); // DOMStringMap  사용자설정속성에 집합개념으로 한번에 접근 가능한 기능이다.
    console.log(label.dataset.cnt);
    // data-cnt 속성값 변경
    label.dataset.cnt = parseInt(label.dataset.cnt) + 10;
});


const addBtn = document.querySelector('button');
addBtn.addEventListener('click', event => {
    addElement();
});

function addElement() {
    let pE = document.createElement('p');
    let inputE = document.createElement('input');
    inputE.setAttribute('type', 'text');
    inputE.setAttribute('size', '40');
    // inputE.setAttribute('data-num', '???');
    // 추가할 번호 
    let addNum = document.querySelectorAll('div > p > input').length; 
    inputE.setAttribute('data-num', addNum);
    pE.appendChild(inputE);

    let parentNode = document.querySelector('div');
    let referenceNode = document.querySelector('button');
    parentNode.insertBefore(pE, referenceNode); //addForm.html 의 div와 button 사이에 끼워넣는다.
}


