/**
 * arguments
 * -> 함수에는 arguments라는 변수에 담긴 숨겨진 유사 배열이 있다. 
 *    이 배열에는 함수를 호출할 때 입력한 인자가 담겨있다.
 */
function sum() {
    var i, _sum = 0;
    for(i = 0; i < arguments.length; i++) {
        document.write(i+': '+arguments[i]+'<br/>');
        _sum += arguments[i];
    }
    return _sum;
}
document.write('result : ' + sum(1,2,3,4));

/**
 * 매개변수와 관련된 두가지 수가 있다. 하나는 함수.length, 다른 하나는 arguments.length이다.
 * 함수.length는 함수로 전달된 실제 인자의 수를 의미, arguments.length는 함수에 정의된 인자의 수를 의미
 */
function zero() {
    console.log(
        'zero.length', zero.length,
        'arguments', arguments.length
    );
}
zero(); // zero.length 0 argugments 0

function one (arg1) {
    console.log(
        'one.length', one.length,
        'arguments', arguments.length
    );
}
one('val1', 'val2'); // one.length 1 arguments 2