/* 
    정규표현식 객체 생성자
        정규표현식을 사용하여 할 수 있는 작업
        추출, test, 치환
*/

var pattern1 = /a/;
var pattern2 = new RegExp('b');

// pattern.exec() => 찾고자하는 패턴이 있으면 배열로 돌려줌
// console.log(pattern1.exec('abcdef')); // > [a]`
// console.log(pattern1.exec('bcdef')); // > null

// pattern test() => 찾고자 하는 패턴이 있으면 불리언 값으로 true를 돌려줌
// console.log(pattern1.test('abcde')); // > true
// console.log(pattern1.test('bcde')); // > false

//String.match() => RegExp.exec()와 비슷

// console.log('abcdef'.match(pattern1)); // ["a"]
var str = 'abcdef';
// console.log(str.match(pattern1));

// String.replace() => 문자열에서 패턴을 검색해 이를 변경한 후에 변경된 값을 리턴
// console.log(str.replace(pattern1, 'A'));

/**
 *   정규 표현식 옵션
 *      정규표현식 패턴을 만들 때 옵션을 설정할 수 있다. 옵션에 따라 검출되는 데이터가 달라짐   
 */

// i => 대문자 소문자를 구분하지 않음
var xi = /a/;

// console.log("Abcde".match(xi));

var oi = /a/i;
// console.log("Abcde".match(oi));

// g
var xg = /a/;
console.log("abcdea".match(xg));

var og = /a/g;
console.log("abcdea".match(og));

var ig = /a/ig; // a를 찾는데 대문자 소문자 구분하지 않고 이 패턴에 해당되는 모든 문자를 찾아서 리턴한다.
console.log("AabcdAa".match(ig));

/**
 *  정규 표현식 캡쳐
 */

var pattern = /(\w+)\s(\w+)/;
var str = "coding everybody";
var result = str.replace(pattern, "$2, $1");

console.log(result);


/**
 * 정규 표현식 치환
 * 
 */
var urlPattern = /\b(?:https?):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*/gim;
var content = '생활코딩 : http://opentutorials.org/course/1 입니다. 네이버 : http://naver.com 입니다. ';
var result = content.replace(urlPattern, function(url) {
    return '<a href=" '+url+'">'+url+'</a>';
});
console.log(result);