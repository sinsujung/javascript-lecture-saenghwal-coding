/*
    boolean의 대체제 ?
    if 문 뒤에 boolean 값만 들어가는 것은 아니다.
*/

// false로 인지하는 것
if ('') {
    alert('빈 문자열');
}

if ('suding') {
    alert('빈 문자열');
}

if (!undefined) {
    alert('undefined');
}

var a; // 값을 안줬기 때문에 undefined 상태

if (a) {
    alert('값이 할당되지 않은 변수');
}

if (!null) {
    alert ('null');
}

if (!NaN) {
    alert('NaN');
}