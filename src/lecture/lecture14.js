 // 객체
 // 객체 생성 방법 1
var grades = {'egoing': 10 , 'k8805':6, 'sorialgi': 80};

// 객체 생성 방법 2
var grades = {};
grades['egoing'] = 10;
grades['k8805'] = 6;
grades['sorialgi'] = 80;

// 객체 생성 방법 3
var grades = new Object();
grades['egoing'] = 10;
grades['k8805'] = 6;
grades['sorialgi'] = 80;

// 객체 값 꺼내기 1
grades['egoing'];

// 객체 값 꺼내기2
console.log(grades.k8805);

// 객체와 반복문
for (key in grades) {
    document.write("key: " + key + " value :" + grades[key] + "<br />");
}