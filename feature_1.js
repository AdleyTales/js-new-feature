/**
 * 空值合并运算符
 */

// default string
const foo = null ?? 'default string';
console.log(foo);

// 0
const baz = 0 ?? 42;
console.log(baz);