/*
*Primitive Types
These are your data types. Similar Deal as Python with some minor variations
Types:
    Number - No int or floats, just number. Includes negatives. Note that the maximum size is to a couple bilionths of a place. Super uncommon to come across this
        NaN - A special JS number. It means not a number, and counts as a number. Arrived at by doing impossible math. 0/0, 1 + NaN, etc.
        Infinity - Number value. Can't really be stored. Arrived at by doing things like 1/0. Also comes in a negative variety.
    String
    Boolean
    Null
    Undefined
There's also Symbol & BigInt, but those are really uncommon

*Math
- Same shit as Python. +, -, *, /, % (modulo or remainder), ** squares
- Order of operations is still PEMDAS

*Variables and let
- Unlike Python, varaibles are defined using let and const
- let someName = 1
- A variable defined by let CAN be changed later on
    - You cannot redeclare variables with let to change them.
- Conventions include..
    Cammel Case
    Can't name shit after types, functions, commands, etc etc. Just won't work

*Unary Operators
- Operators where there are only 1 side
let counter = 0;
counter++;
- Now counter = 1
- Can also do --

*Const
- Create variables that CANNOT be changed. Set it and forget it
- Used frequently with Arrays & Objects


*/