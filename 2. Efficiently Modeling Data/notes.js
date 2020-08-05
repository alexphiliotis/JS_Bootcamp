/*
*Strings
- trim() : Removes whitespace from both sides of a string. Won't change the original string

*Escape Characters
- \n - Newline character
- \' - Single Quote
- \" - Double Quote
- \\ - Backslash

*String Template Literals
The JS equivelent of fstrings in python
`I counted ${3 + 4} sheep`;
Creates: `I counted 7 sheep`
These ARE NOT quotes, they're the ` above the tab

*Null & Undefined
- Null is the intentional absence of any value. You must assign this yourself. Counts as a value, but the value is nothing
- Undefined: Variabls that do not have an assigned value. Not necessarily that something is purposefu emtpy, just that there isn't a value.

*Math Object & Random Numbers
- Math contains properties and methods for mathematical constants and functions
- Things like the ability to round, remove the decimal, Pi, etc.
- Math.random is used very often. By default generates a random number between 0 and 1 non inclusive
- To get something between, say, 1 and 10 it has to be transformed
Math.floor(Math.random() * 10 ) + 1;
- floor removes the decimal place on the random number that's being multipled by 10, and then adds 1 so it includes 10
- For example, if you wanted to simulate a dice roll, it'd look like this
Math.floor(Math.random() * 6) + 1

*typeof
- Pretty much the same as python's type function
- Identifies the type of an object, piece of data, etc.
- It's an operator like + or -. Doesn't require () since it's not a function

*parseInt & parseFloat
- parseInt just parses the integer of string
- parseFloat just parses the float of string
- It will only parse numbers at the BEGINNING of a string
- If your string is '$100', it can't parse this


*/