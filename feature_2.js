/**
 * Dynamic Import
 * 动态导入
 */

const { count, foo } = await import('./feature_2_inner.js')

console.log(count)
const fooVal = await foo()
console.log(fooVal)

/*

demo2
10000
foo function

 */