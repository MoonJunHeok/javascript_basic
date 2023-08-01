class Person{

  // 정적 속성(static)
  static commonAttribute = '공통속성';
  // 정적 메서드
  static commonMethod(){
    console.log('공통 메서드입니다..');
  }

constructor(name,age){
  // this ={};
  this.name = name;
this.age = age;
// return this{};
}
// setter / getter 생성 (메서드로 보면안된다.) , _name 을 통해 name으로 접근하도록 한다.
get name(){
  return this._name;
}
set name(name){
  if(name === undefined){
    throw new Error('이름은 반드시 입력해야합니다.')
  }
  this._name = name;
}
get age(){
  return this._age;
}
set age(age){
  if(age < 10 || age > 100){
    throw new Error('나이는 10~100사이를 입력하세요')
  }
  this._age = age;
}

showInfo(){
  console.log(`이름 : ${this.name} 나이 :${this.age}`);
}

}
let person = new Person('김기정',20);
person.name = '강기정'; //직접 name접근이 아닌 _name에 접근하도록 만든것
person.age = 15;
console.log(person.name);
console.log(person.age);
person.showInfo();

try{
// person.name = undefined;
person.age = 110; 
}catch(e){
  alert(e.message);
}
person.showInfo();

console.log(Person.commonAttribute);
Person.commonMethod();

// person.commonMethod(); 에러나게된다.