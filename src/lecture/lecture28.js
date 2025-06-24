/**
 * 표준 내장 객체(Standard Built-in Object)의 확장
 * -> SBO는 자바스크립트가 기본적으로 가지고 있는 객체들을 의미
 *    내장 객체가 중요한 이유는 프로그래밍을 하는데 기본적으로 필요한 도구들이기 때문이다.
 *    프로그래밍은 언어와 호스트 환경에 제공하는 기능들을 통해 새로운 소프트웨어를 만들어내는 것이기 때문에
 *    내장 객체에 대한 이해는 프로그래밍의 기본이라고 할 수 있음
 */

/**
 * 내장 객체 종류
 * Object
 * Function
 * Array
 * String
 * Number
 * Math
 * Date
 * RegExp
 */

/**
 * 배열의 확장 1
 */
// var arr = new Array('seoul', 'new york', 'landarkh', 'pusan', 'Tsukuba');
// function getRandomValueFromArray(arr) {
//     var index = Math.floor(arr.length*Math.random());
//     return arr[index];
// }
// console.log(getRandomValueFromArray(arr));

/**
 * 배열의 확장 2
 */
Array.prototype.random = function() {
    var index = Math.floor(this.length*Math.random());
    return this[index];
}
var arr = new Array('seoul', 'new york', 'landarkh', 'pusan', 'Tsukuba');
console.log(arr.random());