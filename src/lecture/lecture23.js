/**
 * 객체 지향 프로그래밍 (Object Oriented Programming)
 * -> 좀 더 나은 프로그램을 만들기 위한 프로그래밍 패러다임으로
 * 로직을 상태(state)와 행위(behave)로 이루어진 객체로 만든 것이다.
 * 이 객체들을 마치 레고 블럭처럼 조립해서 하나의 프로그램을 만드는 것이 객체지향 프로그래밍
 */

/**
 * 객체
 * -> 서로 연관된 변수와 함수를 그룹핑한 그릇이라고 할 수 있다.
 *    객체 내의 변수를 프로퍼티(property) 함수를 메소드(method)라고 부른다.
 */
var person = {}
person.name = 'egoing';
person.introduce = function() {
    return 'My name is ' + this.name;
}
document.write(person.introduce());

// 위 코드는 객체를 만드는 과정에 분산되어 있다. 객체 정의와 동시에 값을 셋팅하는 코드로 바꾸면 아래와 같다.

var person = {
    'name' : 'egoing',
    'introduce' : function() {
        return 'My name is ' + this.name;
    }
}

// 객체 생성 시 중복 코드 발생
var person1 = {
    'name' : 'egoing',
    'introduce' : function() {
        return 'My name is ' + this.name;
    }
}

var person2 = {
    'name' : 'leezche',
    'introduce' : function() {
        return 'My name is ' + this.name;
    }
}

/**
 * 생성자(constructor)
 * -> 객체를 만드는 역할을 하는 함수
 *    자바스크립트 에서 함수는 재사용 가능한 로직의 묶음이 아니라 객체를 만드는 창조자라고 할 수 있음
 */

// 중복 제거 코드
function Person() {}
var p = new Person();
p.name = 'egoing';
p.introduce = function() {
    return 'My name is ' + this.name;
}
document.write(p.introduce());

// 함수를 호출 할 때 new를 붙이면 새로운 객체를 만든 후에 이를 리턴한다.
function Person(name) {
    this.name = name;
    this.introduce = function() {
        return 'My name is ' + this.name;
    }
}

var p1 = new Person('egoing');
document.write(p1.introduce() + "<br />");

var p2 = new Person('leezche');
document.write(p2.introduce());