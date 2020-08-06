/*
*Array's
- Arrays are functionally Python's lists
- They're declared the same way as variables, with []

let students = ['Alex','Bryn','Chris']

- Array's are indexed the same way as lists.
- You can change individual elements if you know the index.

*Push, pop, shift, and unshift
Push - Add to end
Pop - Remove from end
Shift - Remove from beginning
Unshift - Add to beginning

*Additional Methods
concat - Merge arrays
includes - Look for a value. Can specify a point to begin searching, defaults to 0. Returns a boolean value
indexOf - Just like str.indexOf. Can also specify a point to begin searching, defaults to 0. Returns either an index or -1 (not found)
Join - Creates a string from an array 
reverse - Reverses an array. This actually mutates the original array
Slice - Copy portion of an array. Provide a starting and end point. End point is non-inclusive
Splice - Remove / replace elements. array.splice(startIndex, deleteCount, [values])
Sort - Sorts an array. Mutates array. Converts elements into strings and compares their UTF codes. So it'll sort 100000 before 20, for example
    - You can pass in a sorting function

*Using Const with Arrays
Because variables with arrays are references to specific places in memories and not the values themselves, it's possible to change the values of a const array using different methods
!As long as you don't change the place in memory that it's referencing, you're good

*/