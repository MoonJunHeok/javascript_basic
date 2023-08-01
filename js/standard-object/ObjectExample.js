// let user = new Object(); 아래와 같은 의미
let user = {
  name : '김기정'
};

//JS의 동적객체변환(자바의 오토박싱)  기본타입에 . 을 찍게되는 순간 객체화된다.
let str = 'abcd'.charAt(0);

//isPrototypeOf는 바로 접근 어려워 오브젝트 프로토타입을 통해서 접근해야한다.
console.log(user.toString());
console.log(Object.prototype.isPrototypeOf(user));

//Object의 static 메소드 활용 
// 깊은복사
let user2 = {};
Object.assign(user2, user);
console.dir(user2);


let prototype2 = Object.getPrototypeOf(user);
console.dir(prototype2);

