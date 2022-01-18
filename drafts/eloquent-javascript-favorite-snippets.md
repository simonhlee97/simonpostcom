---
title: 'My Favorite Parts From Eloquent JavaScript'
excerpt: 'I recently read this popular JavaScript book, cover to cover. It's a highly enjoyable book for beginners and experts. I am sharing my favorite quotes and sections from the book.'
coverImage: '/assets/blog/dynamic-routing/cover.jpg'
thumbnails2: 
  - 
    height: 3
    src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599"
    width: 4
  - 
    height: 1
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799"
    width: 1
  - 
    height: 4
    src: "https://source.unsplash.com/qDkso9nvCg0/600x799"
    width: 3
date: '2021-05-16T05:35:07.322Z'
author:
  name: Simon
  picture: '/assets/blog/authors/simonface.jpg'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
---



What is JavaScript? (Introduction)


## Ch.3 Functions

### CLOSURE
What happens to local bindings when the function call that created them is no longer active?

```
function wrapValue(n) {
  let local = n;
  return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2
```

local bindings are created anew for every call, and different calls can’t trample on one another’s local bindings.

This feature—being able to reference a specific instance of a local binding in an enclosing scope—is called closure. A function that references bindings from local scopes around it is called a closure.

### RECURSION

```
function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(2, 3));
```
The function calls itself multiple times with ever smaller exponents to achieve the repeated multiplication.

But this implementation has one problem: in typical JavaScript implementations, it’s about three times slower than the looping version.

Some problems really are easier to solve with recursion than with loops. Most often these are problems that require exploring or processing several “branches”, each of which might branch out again into even more branches.

### FUNCTIONS AND SIDE EFFECTS

Functions are roughly divided into 2 categories: those that return a value, and those that are called for their side effects.(both are also possible)

Functions that create values are easier to combine in new ways than functions that directly perform side effects.

*Pure Function*
- has no side effects, but also does not rely on side effects from other code. (e.g. doesn't read global bindings whose value might change.)
- Same arguments always produce same value.
- can be substituted by its return value without changing the meaning of the code.
- Nonpure functions tend to require more scaffolding to test.

Bindings declared with var behave differently—they end up in the nearest function scope or the global scope.




Objects
operators examples: delete, in

To see what properties an Object has -> Object.keys

Object.assign
let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);
// → {a: 1, b: 3, c: 4}

Mutability

Object values can be modified.
Numbers, strings, and Booleans are all immutable

```js
for (let i = 0; i < JOURNAL.length; i++) {
  let entry = JOURNAL[i];
  // Do something with entry
}

for (let entry of JOURNAL) {
  console.log(`${entry.events.length} events.`);
}
```

array methods:
- includes
- push, pop (for end of array)
- shift, unshift (beginnig of array)
- indexOf
- slice

string methods:
- indexOf
- slice
- trim
- padStart
- split
- join
- repeat
- length
  

REST PARAMETERS
let words = ["never", "fully"];
console.log(["will", ...words, "understand"]);
// → ["will", "never", "fully", "understand"]

THE MATH OBJECT

Math.random - the machine keeps some hidden value, and whenever you ask for a new random number, it performs complicated computations on this hidden value to create a new value. It stores a new value and returns some number derived from it. That way, it can produce ever new, hard-to-predict numbers in a way that seems random.

```js
console.log(Math.floor(Math.random() * 10));
// random whole number between 0 to 9
```


DESTRUCTURING
If you know the value you are binding is an array, you can use square brackets to “look inside” of the value, binding its contents.

A similar trick works for objects, using braces instead of square brackets.

JSON
Because properties only grasp their value, rather than contain it, objects and arrays are stored in the computer’s memory as sequences of bits holding the addresses—the place in memory—of their contents.

What we can do is serialize the data. That means it is converted into a flat description. A popular serialization format is called JSON (pronounced “Jason”), which stands for JavaScript Object Notation.

JSON.stringify & JSON.parse

LIST
A common data structure is the list (not to be confused with array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.

```js
let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
```

The resulting objects form a chain, like this:
A linked list

A nice thing about lists is that they can share parts of their structure.







Ch.5 Higher Order Functions
ABSTRACTING REPETITION

for (let i = 0; i < 10; i++) {
  console.log(i);
}

function repeatLog(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(3, console.log);
// → 0
// → 1
// → 2

HIGHER-ORDER FUNCTIONS
Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.

Higher-order functions allow us to abstract over actions, not just values.

There is a built-in array method, forEach, that provides something like a for/of loop as a higher-order function.

```js
["A", "B"].forEach(l => console.log(l));
// → A
// → B
```

SCRIPT DATA SET

FILTERING ARRAYS

```js
function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}

console.log(filter(SCRIPTS, script => script.living));
// → [{name: "Adlam", …}, …]
```

TRANSFORMING WITH MAP

SUMMARIZING WITH REDUCE

COMPOSABILITY
Higher-order functions start to shine when you need to compose operations.

The some method is another higher-order function. It takes a test function and tells you whether that function returns true for any of the elements in the array

a for/of loop can also be used on strings. Like codePointAt, this type of loop was introduced at a time where people were acutely aware of the problems with UTF-16. When you use it to loop over a string, it gives you real characters, not code units.


Ch.6 The Secret Life of Objects

ENCAPSULATION
Separating interface from implementation is a great idea. It is usually called encapsulation.


METHODS

PROTOTYPES

CLASSES

CLASS NOTATION

Overriding derived properties

MAPS

Polymorphism

SYMBOLS

The iterator interface

Getters, setters, and statics

INHERITANCE

The instanceof operator


