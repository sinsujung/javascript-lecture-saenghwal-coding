// 대입 연산자
a = 1;

// 비교 연산자
a == b;
a > b;
a < b;
a >= b;
a <= b;

/* 
    ==
    동등, 일치 연산자 (equal operator)
    - 좌항과 우항을 비교하여 값이 같으면 true, 다르면 false
 */

alert(1==2); // false
alert(1==1); // true
alert("one" == "two"); // false
alert("one" == "one"); // true

/*
    ===
    엄격한 동등 연산자 (strict equal operator)
    - 좌항과 우항의 값이 정확하게 같은가
*/

alert(1 === "1"); // false
alert(1 == "1"); // true

alert(null == undefined); // true
alert(null ===undefined); //false
alert(true == 1); // true
alert(true === 1); // false
alert(true == '1'); // true
alert(true === '1'); // false

alert(0 === -0); // true
alert(NaN === NaN); // false

/*
    부정과 부등호
*/
alert(1!=2); //true
alert(1!=1); //false
alert("one"!="two"); //true
alert("one"!="one"); //false

alert(10>20); //false
alert(10>1); //true
alert(10>10); //false

alert(10>=20); //false
alert(10>=1); //true
alert(10>=10); //true