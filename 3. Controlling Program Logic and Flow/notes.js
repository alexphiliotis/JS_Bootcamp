/*
*If statements
Syntax looks like this...
if (condition) {
    run x
}

Else and else if statements are easy to append

if (a) {
    then b
} 
else if (c) {
    then d
} 
else {
    then e
}

*/

//Basic conditional logic
let highScore = 1400;
let userScore = 1450;

if (highScore > userScore) {
  console.log(
    `Good try, but your score of ${userScore} didn't beat the highScore`
  );
} else {
  console.log(`You did it! Your score of ${userScore} is the new high score!`);
}

//Of course, you can nest conditionals

if (highScore > userScore) {
  console.log(
    `Good try, but your score of ${userScore} isn't enough to beat the high score`
  );
} else {
  if (userScore > highScore && userScore < highScore + 100) {
    console.log(`You beat the highscore by less than 100. Close one`);
  } else {
    console.log(
      `You did it! Your score of ${userScore} is the new high score!`
    );
  }
}

/*
*Quick refresher on truthy & falsey values
Falsey:
false
0
"" (empty string)
null
undefined
NaN

Truthy:
Literally everything else

*Operator Precedence
If you conditional logic that states x OR y || z, does JS evaluate the or or the and first?
Precendence is...
NOT (!) comes before || and &&, && has a higher precedence than ||
You can of course change this by using parens

x || y && z is going to evalue the && first
x || (y && z) This will evalute if x is true OR if both y and z are true

*The switch statement
Not quite as common as the usual conditional, but still extremely useful in certain situations
Like if you had a cariable that was the day of the week, and conditional logic based on what day it is
Switch just takes one value and checks it against mutliple possible values. Here's an example...

- If you don't add the breaks to those cases, it'll run the matched case and then every subsequent case
- Instead of else, you run default at the very end.
- If you want to combine cases, i.e. different inputs with the same output, you'd just delete the code under the case
case 1:
case 2:
    console.log("Output")
This will log "Output" whether the case is one or two. This is why cases require a break if you want to end the code.

*/

let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid Day");
}

/*
*Ternary Operator
Let's you run short functions based on conditional logic
Example below
The ? is key here. It's saying "If num is 7, do this" the colon then says "If it's not, do this"

*/

let num = 7;

num === 7 ? console.log("Lucky number") : console.log("Mediocre number");

let status = "Offline";

let color = status === "Offline" ? "Red" : "Green";

console.log(color);
