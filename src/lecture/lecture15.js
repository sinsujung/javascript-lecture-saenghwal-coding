// 객체지향 프로그래밍
// this -> 약속된 변수(함수를 소유하고 있는 객체를 가르키고 있는 변수)
var grades = {
    'list': {'egoing': 10, 'k8805': 6, 'sorialgi': 80},
    'show' : function() {
        for(var name in this.list) {
            console.log(name + ' : ' + this.list[name] + "<br/>");
        }
    }
}

grades.show();