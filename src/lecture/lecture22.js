/**
 * 함수의 호출
 */
function func() {

}
func();

/**
 * JavaScript는 함수를 호출하는 특별한 방법을 제공
 * 함수 func는 Function이라는 객체의 인스턴스이다.
 * 따라서 func는 객체 Function이 가지고 있는 메소드들을 상속하고 있다.
 */

function sum(arg1, arg2) {
    return arg1 + arg2;
}
console.log(sum.apply(null), [1, 2])

sum.apply(null, [1,2]);

/**
 * apply 사용
 */
o1 = {val1 : 1, val2 : 2, val3 : 3}
o2 = {v1 : 10, v2 : 50, v3 : 100, v4 : 25}
function sum() {
    var _sum = 0;
    for(name in this) {
        _sum += this[name];
    }
    return _sum;
}
console.log(sum.apply(o1)); // 6
console.log(sum.apply(o2)); // 185
