/**
 * 유효범위(Scope)
 * 
 * 유효범위는 변수의 수명을 의미한다. 아래의 예제 결과는 global이다.
 * 
 */
// var vscope = prompt("내용 입력 : ");
// function fscope () {
//     console.log(vscope);
// }
// fscope();

var vscope = 'global';
function fscope() {
    var vscope = 'local';
}
fscope();
console.log(vscope);

/**
 * 유효범위의 필요성
 * 
 * 아래 두개의 예제는 변수 i를 지역변수로 사용했을 때와 전역변수로 사용했을 때의 차이점을 보여준다.
 * 전역변수는 각기 다른 로직에서 사용하는 같은 이름으 변수값을 변경시켜서 의도하지 않은 문제를 발생시킨다.
 */

function a () {
    var i = 0;
}

for(var i = 0; i < 5; i++) {
    a();
    document.write(i);
}

/**
 *  전역변수를 사용하는 법
 * 
 *  -> 불가피하게 전역변수를 사용해야 하는 경우는 하나의 객체를 전역변수로 만들고 객체의 속성으로 변수를 관리하는 방법을 사용한다.
 */

(function() {
    var MYAPP = {}
    MYAPP.calculator = {
        'left' : null,
        'right' : null
    }
    MYAPP.coordinate = {
        'left' : null,
        'right' : null
    }
    MYAPP.calculator.left = 10;
    MYAPP.calculator.right = 20;
    function sum() {
        return MYAPP.calculator.left + MYAPP.calculator.right;
    }
    document.write(sum());
}())

/**
 * 정적 유효범위
 * 
 * -> 자바스크립트는 함수가 선언된 시점에서의 유효범위를 갖는다. 이러한 유효범위의 방식을 정적 유효범위(static scoping), 혹은 렉시컬(lexical scoping)이라고 한다.
 */
var i = 5;

function a () {
    var i = 10;
    b();
}

function b() {
    document.write(i);
}

a(); 