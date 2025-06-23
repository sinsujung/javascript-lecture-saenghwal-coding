/**
 * this
 * -> this는 함수 내에서 함수 호출 맥락(context)를 의미
 *    맥락이라는 것은 상황에 따라서 달라진다는 의미인데
 *    즉, 함수를 어떻게 호출하느냐에 따라 this가 가리키는 대상이 달라진다.
 */

// 함수와 this
function func() {
    if(window === this) {
        document.write("window === this");
    }
}

func();

// 메소드와 this
var o = {
    func : function() {
        if(o === this) {
            document.write("<br />" + "o === this");
        }
    }
}
o.func();

// 생성자와 this
var funcThis = null;

function Func() {
    funcThis = this;
}
var o1 = Func();
if(funcThis === window) {
    document.write('window </br>');
}

var o2 = new Func();
if(funcThis === o2) {
    document.write('o2 </br>');
}

// apply, call
// -> 함수의 메소드인 apply, call을 이용하면 this의 값을 제어할 수 있다.
var o = {}
var p = {}
function func() {
    switch(this) {
        case o:
            document.write('o<br />');
            break;
        case p:
            document.write('p<br />');
            break;
        case window:
            document.write('window<br />');
            break;
    }
}
func();
func.apply(o);
func.apply(p);
