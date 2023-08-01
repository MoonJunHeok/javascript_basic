//강아지 객체 생성(틀 없이 즉시)
//객체 리터럴 표현식  (화살표함수는 사용못함)
//객체 내에서 접근하기위해서 this 사용
//eat메소드에서 name호출할때 객체 밖에 전역변수 name이 있으면 거기에 접근하게된다.
// js도 dog객체만들면 위에 object객체가 있다.
let dog = {
  name : '루니',
  age : 8,
  kind : '비숑',
  eat : function(){
    console.log(this.name + '가 무척 잘 먹습니다...');
  },
  toString : function (){
    return"헐...";
  }
};

//[]는 추후 css에서 읽어올때 css속성에 - 기호가 많아서 사용한다
// 객체의 속성을 검색 
console.log(dog.name);
console.log(dog['name']);
console.log(dog.age);
console.log(dog.kind);
dog.eat();

//객체의 속성을 변경
dog.name = '로니';
console.log(dog.name);

//객체의 속성을 제거
delete dog.age;
console.log(dog.age);

//객체의 기능을 동적으로 추가
dog.work = function(){
  console.log('잘 걸어다닙니다..');
};
dog.work();


//in 연산자
if('age' in dog){
  console.log(dog.age);
}else{
  console.log('없는데요;;');
}

// for~in문
//log에 .을 사용하면 dog."key" 라는 뜻으로 이상해짐
// 이럴 때 []을 사용한다.
for (const key in dog) {
  console.log(key, dog[key]);
}
// for~of문 (객체에서는 사용불가하다.)
let array = [5,3,9,1]
for (const value of array) {
  console.log(value);
}
console.clear();

console.log(dog);
console.dir(dog);






 







