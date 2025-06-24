/**
 * prototype
 */
function Ultra() {}
Ultra.prototype.ultraProp = true;

function Super() {}
Super.prototype = new Ultra();

function Sub() {}
Sub.prototype = new Super();

var o = new Sub();
console.log(o.ultraProp);

/**
 * prototype chain
 */
function Ultra() {}
Ultra.prototype.ultraProp = true;

function Super() {}
var t = new Ultra();
t.ultraProp = 4;
Super.prototype = t;

function Sub() {}
var s = new Super();
// s.ultraProp = 3;
Sub.prototype = s;

var o = new Sub();
// o.ultraProp = 1;
console.log(o.ultraProp); // 3