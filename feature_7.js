/**
 * 数组
 */

/**
 * array.toSorted()
 * 需要nodejs较新的版本
 */
// const values = [1, 10, 21, 2];
// const sortedValues = values.toSorted((a, b) => a - b);
// console.log(sortedValues); // [1, 2, 10, 21]
// console.log(values); // [1, 10, 21, 2]

/**
 * array.findLast()
 */
const array1 = [5, 12, 50, 130, 44];
const found = array1.findLast((element) => element > 45);
console.log(found);
// expected output: 130


/**
 * array.toReversed()
 * 需要nodejs较新的版本
 */
// const items = [1, 2, 3];
// const reversedItems = items.toReversed();
// console.log(reversedItems); // [3, 2, 1]
// console.log(items); // [1, 2, 3]

// https://2024.stateofjs.com/zh-Hans/features/