/**
 * 콜백
 * 처리의 위임
 * -> 값으로 사용될 수 있는 특성을 이용하면 함수의 인자로 함수를 전달할 수 있다.
 *    값으로 전달된 함수는 호출될 수 있기 때문에 이를 이용하면 함수의 동작을 완전히 바꿀 수 있다.
 *    인자로 전달된 함수 sortNumber의 구현에 따라서 sort의 동작방법이 완전히 바뀌게 된다.
 */

function sortNumber(a, b) {
    return b-a; // 내림차순
    // return a-b; // 오름차순
}

var numbers = [20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(numbers.sort(sortNumber)); // array, [20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

/* 위에서는 sortfunc 가 콜백 함수이다.
*/