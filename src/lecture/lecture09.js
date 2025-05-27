/*
    논리 연산자 
    
    && (and)

*/
if (true && true) {
    alert(1);
}

if (ture && false) {
    alert(2);
}

if (false && true) {
    alert(3);
}

if (false && false) {
    alert(4);
}

var id = prompt('아이디 입력');
var pw = prompt('비밀번호 입력');

if (id === 'suding' && pw === '1234') {
    alert('로그인 성공!');
} else {
    alert('로그인 실패');
}

/*

    논리 연산자 || (or)

*/

if (true || true) {
    alert(1);
}

if (ture || false) {
    alert(2);
}

if (false || true) {
    alert(3);
}

if (false || false) {
    alert(4);
}

id = prompt('아이디 입력');

if (id === 'suding' || id === 'SUDING') {
    alert("인증완료!");
} else {
    alert("인증실패!");
}

/*

    &&와 || 모두 사용한 예제

*/
id = prompt('input id !');
pw = prompt('input pw!');
if ((id === 'suding' || id === 'SUDING') && pw === '1234') {
    alert ('Athentication success!');
} else {
    alert ('Athentication failed,,');
}