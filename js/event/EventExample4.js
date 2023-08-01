// 이벤트 처리를 객체화
class EventHandler{
  constructor(){
    //생성자 비어있어도 this{}는 있다고생각..
// return this;
  }
// 이벤트 소스에 이벤트 핸들러 등록
eventRegist(){
  document.querySelector('button').addEventListener('click', event => {
    this.addStudent(event);
  });

  //추가로 이벤트 등록...




}

//학생 등록예제
addStudent(event){
  alert('학생등록완료');
}

//학생목록




}


//app.js 만들어서 거기서 동작
let eventHandler = new EventHandler();
eventHandler.eventRegist();