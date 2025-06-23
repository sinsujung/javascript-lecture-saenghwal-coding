/**
 * 상속(inheritance)란 ?
 * -> 객체는 연관된 로직들로 이루어진 작은 프로그램이라고 할 수 있다.
 *    상속은 객체의 로직을 그래돌 물려 받는 또 다른 객체를 만들 수 있는 기능을 의미
 *    단순히 물려받는 것이라면 의미가 없겠지만, 기존의 로직을 수정하고 변경해서
 *    새로운 객체를 만들 수 있게 해준다.
 */
function Person (name) {
    this.name = name;
}

Person.prototype.name = null;
Person.prototype.introduce = function() {
    return 'My name is ' + this.name;
}
var p1 = new Person('egoing');
document.write(p1.introduce() + "<br />");

// 상속의 사용법
function Person(name) {
    this.name = name;
}
Person.prototype.name = null;
Person.prototype.introduce = function() {
    return 'My name is ' + this.name;
}

function Programmer(name) {
    this.name = name;
}

Programmer.prototype = new Person();

var p1 = new Programmer('egoing');
document.write(p1.introduce() + "<br />");

// 기능의 추가
Programmer.prototype.coding = function() {
    return "hello world";
}

var p2 = new Programmer('suding');
document.write(p2.introduce() + "<br/>");
document.write(p2.coding() + "<br/>");

function Designer(name) {
    this.name = name;
}
Designer.prototype = new Person();
Designer.prototype.design = function() {
    return "beautiful!";
}

var p3 = new Designer('jidang');
document.write(p3.introduce() + "<br/>");
document.write(p3.design() + "<br/>");
