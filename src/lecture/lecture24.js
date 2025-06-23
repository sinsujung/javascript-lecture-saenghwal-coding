/**
 * 전역객체
 * -> 전역객체(Global object)는 특수 객체이다.
 *    모든 객체는 전역객체의 프로퍼티
 */
function func() {
    console.log('Hello?');
}
func();
window.func();