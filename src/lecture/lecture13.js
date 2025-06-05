// 배열 arr[]
var member = ['egoing', 'k8805', 'sorialgi'];
console.log(member);

console.log(member[0]);

// 배열의 효용성
function get_members() {
    return ['hey', 'lo8805', 'norialgi', 'leezche', 'suding'];
}

// 배열과 반복문
let members = get_members();

// document.write(members[0].toUpperCase() + "<br/>");
// document.write(members[1].toUpperCase() + "<br/>");
// document.write(members[2].toUpperCase() + "<br/>");

// for (i = 0; i < members.length; i ++) {
//     document.write(members[i].toUpperCase() + "<br/>");
// }

// 배열의 추가

// 배열의 마지막에 추가 push
members.push('jidaeng');

// 배열에 배열 추가 concat
members = members.concat(['sin', 'kim']);

// 배열을 머리에 추가하는 법 unshift
members.unshift('s');

// for (i = 0; i < members.length; i ++) {
//     document.write(members[i].toUpperCase() + "<br/>");
// }

// 배열 어딘가에 넣고 싶을 때 splice(index, howmany, element1....);
members.splice(1, 0, 'i', 'n');

// for (i = 0; i < members.length; i ++) {
//     document.write(members[i].toUpperCase() + "<br/>");
// }

// 배열을 제거
// 가장 앞에 있는 배열 제거 shift
members.shift();
// for (i = 0; i < members.length; i ++) {
//     document.write(members[i].toUpperCase() + "<br/>");
// }

// 가장 뒤에 있는 배여 제거 pop
members.pop();
// for (i = 0; i < members.length; i ++) {
//     document.write(members[i].toUpperCase() + "<br/>");
// }

// 배열의 정렬
// 알파벳순 오름차순 sort
members.sort();
// for (i = 0; i < members.length; i ++) {
//     document.write(members[i].toUpperCase() + "<br/>");
// }

// 내림차순 reverse
members.reverse();
for (i = 0; i < members.length; i ++) {
    document.write(members[i].toUpperCase() + "<br/>");
}
