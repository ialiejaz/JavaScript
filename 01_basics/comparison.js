// comparison operators:
// 2>1
// 1<2
// 1<=1
// 2>=2
// 2==2
// 2!=3

console.log( 2 > 3)
console.log(3<5)

// the Example below the data types are different which is against the typescript rules,so we have to prevest this

console.log("5" > 10)// cannot compare string with a number

// similarly null :

console.table([
  { comparison: 'null > 0',  result: null > 0 },  // false (0 > 0 is false)
  { comparison: 'null == 0', result: null == 0 }, // false (null is only equal to null/undefined)
  { comparison: 'null < 0',  result: null < 0 },  // false (0 < 0 is false)
  { comparison: 'null <= 0', result: null <= 0 }  // true  (0 <= 0 is true)
]);

console.table([
    {comparison: 'Sum of 123 and 456', result: 123 + 456},
    {comparison: 'undefined == 10', result: undefined == 10},
    {comparison: 'undefined != 10', result: undefined != 10},
    
])

// assignment operator (=) : it only assigns what is on the right of it to what is on the left.
// let x = y (y is assigned to x)

// abstract / loose eqauality (==) : it only compares values not datatype.
// console.log("5" == 5)
// output : true (because of coercion by js on back).

// strict equality (===) : it compares both values and data types.
// console.log("5" === 5)
// output : false (because it strictly check data types and values).
