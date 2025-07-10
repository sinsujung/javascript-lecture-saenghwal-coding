/**
 * Object 객체
 * -> 객체의 가장 기본적인 형태를 가지고 있는 객체
 *    아무것도 상속받지 않는 순수한 객체
 *    자바스크립트에서는 값을 저장하는 기본 단위로 Object를 사용함
 */
var grades = {
    'egoing': 10,
    'k8805': 6,
    'sorialgi': 80
};

/**
 * 동시에 자바스크립트의 모든 객체는 Object 객체를 상속 받는데,
 * 그런 이유로 모든 객체는 Object 객체의 프로퍼티를 가지고 있다.
 * Object 객체를 확장하면 모든 객체가 접근할 수 있는 API를 만들 수 있다.
 */
//Object.keys()
var arr = ["a", "b", "c"];
console.log('Object.keys(arr)', Object.keys(arr));

//Object.prototype.toString()
var o = new Object();
console.log('o.toString()', o.toString());

var a = new Array(1, 2, 3);
console.log('a.toString()', a.toString());

// Object 확장
Object.prototype.contain = function (needle) {
    for(var name in this) {
        if(this[name] === needle){
            return true;
        }
    }
    return false;
}

var o = {
    'name' : 'egoing',
    'city' : 'seoul'
}
// console.log(o.contain('egoing'));
var a = ['egoing', 'leezche', 'grapittie'];
// console.log(a.contain('leezche'));
for(var name in a) {
    if(a.hasOwnProperty(name)) {
    console.log(name);
    }
}