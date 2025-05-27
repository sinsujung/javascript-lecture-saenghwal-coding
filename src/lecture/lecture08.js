// /*
//     조건문 if
// */

// if (true) {
//     alert('result: true');
// }

// if (false) {
//     alert('result : true');
// }

// if (true) {
//     alert(1);
//     alert(2);
//     alert(3);
//     alert(4);
// }
// alert(5);

// if (false) {
//     alert(1);
//     alert(2);
//     alert(3);
//     alert(4);
// }
// alert(5);

// /* 

//     else
//     if가 참이면 if 구문이 실행되고
//     if가 거짓이면 else 구문이 실행된다.

// */

// if (true) {
//     alert(1);
// } else {
//     alert(2);
// }

// if (false) {
//     alert(1);
// } else {
//     alert(2);
// }

// /*

//         else if
//     앞 쪽의 if 구문이 실행 안됐을 때 가로 안의 조건이
//     참이면 실행 되는 구문

// */

// if (false) {
//     alert(1);
// } else if(true) {
//     alert(2);
// } else if(true) {
//     alert(3);
// } else {
//     alert(4);
// }

// // 결과 2

// if (false) {
//     alert(1);
// } else if(false) {
//     alert(2);
// } else if (true) {
//     alert(3);
// } else {
//     alert(4);
// }

// if (false) {
//     alert(1);
// } else if (false) {
//     alert(2);
// } else if (false) {
//     alert(3);
// } else {
//     alert(4);
// }

/*

    prompt
    사용자에게 입력 값을 받을 수 있는 창

*/
    var id = prompt ('아이디를 입력해주세요.')
    if (id === 'suding') {
        var pw = prompt ('비밀번호를 입력해주세요')
        if (pw === '0420') {
            alert ('로그인 성공! ' + id + '님 반가워요!');
        } else {
            alert ('로그인 실패!');
        }
    } else {
        alert ('아이디가 일치하지 않습니다.');
    }