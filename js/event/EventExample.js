// 이벤트 소스에 이벤트 리스너 등록
// function eventListener(event) {
//   console.log('이벤트 핸들러가 작동을 합니다.');
// }




document.querySelector('button').addEventListener('click',(event) =>{
  console.dir(event);
  if(event.ctrlKey){
    event.target.style.backgroundColor = 'blue';
    console.log('왜요')
  }
});
document.querySelector('button').addEventListener('mouseenter',function(event) {
  this.style.backgroundColor = 'gray';
});

document.querySelector('button').addEventListener('mouseleave',event=>{
  event.target.style.backgroundColor = '';
});



function serverSend(message){
  console.log(message + '를 서버에 전송합니다.');
}


let input= document.querySelector('[type = text]');
input.addEventListener('keypress',event => {
  console.log(input.value);
  if(event.keyCode == 13){
    const message = input.value;
    serverSend(message);
    event.target.value = '';
  }
});



// name 속성은 DOM으로 접근하지 않고 document. form . name 속성으로 바로 접근이 가능하다.
// console.dir(document.frm.search);
document.frm.search.addEventListener('change',event =>{
  console.dir(event.target.options);
  // 유사배열이라 배열에 인덱스 넣어준 것을 변수로 설정
  let options= event.target.options;
  let selectValue = options[options.selectedIndex].value;
  console.log(selectValue);
});
