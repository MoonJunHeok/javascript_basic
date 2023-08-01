console.log("1 실행");
doTask();
console.log("2 실행");

// 콜백함수는 taskQueue로 간다.(대기실로)
function doTask() {
  setTimeout(() => {
    console.log("doTask 실행...");
  },1000);
}

console.log("3 실행");

function clock() {
  let element= document.querySelector('#clock');
  let today = new Date();
  element.innerHTML= today.toLocaleString();
}
setInterval(clock,1000);

