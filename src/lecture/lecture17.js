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