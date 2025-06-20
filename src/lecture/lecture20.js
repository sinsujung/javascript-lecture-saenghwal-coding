/**
 * 클로저(closure)
 * -> 내부함수와 밀접한 관계를 가지고 있는 주제
 *    내부함수는 외부함수의 지역변수에 접근 할 수 있는데 외부함수의 실행이 끝나서
 *    외부함수가 소멸된 이후에도 내부함수가 외부함수의 변수에 접근 할 수 있다.
 *    이러한 메커니즘을 클로저라고 한다.
 */

function outter() {
    var title = 'coding everybody';
    return function() {
        alert (title);
    }
}
inner = outter();
// inner();

// private variable
function factory_movie(title) {
    return {
        get_title : function () {
            return title;
        },
        set_title : function (_title) {
            if(typeof _title === 'string') {
                title = _title
            } else {
                console.log("문자열 확인 요망");
            }
        }
    }
}

ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');

// console.log(ghost.get_title());
// console.log(matrix.get_title());
// console.log(ghost.set_title("1"));
// console.log(ghost.get_title());
// console.log(matrix.get_title());


// 클로저의 응용
// for...in -> 인덱스를 가져옴
// for...of -> 배열의 요소 자체를 가져옴
var arr = []
// for(var i = 0; i < 5; i++) {
//     arr[i] = function(){
//         console.log(i);
//     }
// } --> 이렇게 하면 5가 5번 출력

for(var i = 0; i < 5; i++) {
    arr[i] = functin(id) {
        return function() {
            return id;
        }
    }(i);
}
for(var index in arr) {
    console.log(arr[index]());
}