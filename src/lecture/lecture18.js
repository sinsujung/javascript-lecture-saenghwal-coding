/**
 * 값으로서의 함수
 * JavaScript에서는 함수도 객체다. 다시 말해서 일종의 값이다.
 * 거의 모든 언어가 함수를 가지고 있다.
 * JavaScript의 함수가 다른 언어의 함수와 다른 점은 함수가 값이 될 수 있다는 점이다.
 */

// 함수
function a () {}

var a = function() {}


// 메소드
a = {
    b: function(){

    }
}

// 함수는 값이기 때문에 다른 함수의 인자로도 전달 될 수 있다.
function cal(func, num) {
    return func(num)
}

function increase(num) {
    return num + 1
}

function decrease (num) {
    return num - 1
}

console.log(cal(increase, 1));
console.log(cal(decrease, 1));

// 함수는 함수의 리턴 값으로도 사용할 수 있다.
function cal (mode) {
    var funcs = {
        'plus' : function(left, right) {return left + right},
        'minus' : function(left, right) {return left - right}
    }
    return funcs[mode];
}
console.log(cal('plus')(2, 1));
console.log(cal('minus')(2, 1));

// 배열의 값으로도 사용할 수 있다.
var process = [
    function(input) { return input + 10;},
    function(input) { return input + input;},
    function(input) { return input / 2;}
];

var input = 1;
for(var i = 0; i < process.length; i++) {
    input = process[i](input);
}

console.log(input);

// process[0] = 11
// process[1] = 22
// process[2] = 11