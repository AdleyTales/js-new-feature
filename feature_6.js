/**
 * 字符串特性
 */

/**
 * string.replaceAll()
 */
const s1 = "foo_bar_baz";
const s2 = s1.replaceAll('_', '-');
console.log(s2)
// foo-bar-baz

/**
 * string.matchAll()
 */
const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';
const array = [...str.matchAll(regexp)];
console.log(array)

/**
 *
 */
const str1 = "foo bar foo";
const regex1 = /foo/dg;
console.log(regex1.exec(str1).indices[0]); // Output: Array [0, 2]