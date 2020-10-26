/**
 * https://interviewcamp.io/courses/101687/lectures/3311860
 *
 * Idea: if an expression is given evaluvate and send result.
 *
 * ( * & / ) has higher precedence.
 * ( + & - ) has lesser precedence.
 *
 * TimeComplexity : O(n)
 * spaceComplexity : O(n)
 */

const { Stack } = require("./stack");

function isOperator(ch) {
  if (["+", "*", "-", "/"].includes(ch)) {
    return true;
  }
}

function isOperand(ch) {
  const no = parseInt(ch);
  if (no >= 0 && no <= 9) {
    return true;
  }
}

function process(operandStack, operatorStack) {
  if (operandStack.isEmpty() || operatorStack.isEmpty()) {
    throw new Error("operator or operand stack is empty");
  }

  const num2 = parseInt(operandStack.pop());
  const num1 = parseInt(operandStack.pop());

  const operatorCh = operatorStack.pop();

  let result;
  switch (operatorCh) {
    case "+": {
      result = num1 + num2;
      break;
    }
    case "-": {
      result = num1 - num2;
      break;
    }

    case "*": {
      result = num1 * num2;
      break;
    }
    case "/": {
      result = Math.floor(num1 / num2);
      break;
    }
  }

  console.log(`${num1} ${operatorCh} ${num2} => ${result} `);
  operandStack.push(result);
}

function inputStringToCharacterArray(iString) {
  return iString.split(" ");
}

function precedence(operator) {
  switch (operator) {
    case "(":
    case ")":
      return 0;
    case "+":
    case "-":
      return 1;
    case "*":
    case "/":
      return 2;
  }
}

function evaluvate(inputString) {
  const charArr = inputStringToCharacterArray(inputString);
  const operandStack = new Stack();
  const operatorStack = new Stack();
  if (charArr.length) {
    for (let index = 0; index < charArr.length; index++) {
      const ch = charArr[index];
      console.log(`character : ${ch}`);
      if (isOperand(ch)) {
        operandStack.push(ch);
      } else if (isOperator(ch)) {
        while (
          !operatorStack.isEmpty() &&
          precedence(operatorStack.peek()) >= precedence(ch)
        ) {
          process(operandStack, operatorStack);
        }

        operatorStack.push(ch);
      } else if (ch === "(") {
        operatorStack.push(ch);
      } else if (ch === ")") {
        while (operatorStack.peek() !== "(") {
          process(operandStack, operatorStack);
        }
        operatorStack.pop();
      } else {
        console.log(`Not Digit (or) Arithemtic operator`);
      }
    }

    while (!operatorStack.isEmpty()) {
      process(operandStack, operatorStack);
    }

    // At this point there should be a single value in stack.
    return operandStack.pop();
  }

  return 0;
}

console.log("---------------------------------");
let input = "1 + 2 / 1 + 3 * 2";
console.log(`input : ${input}`);
console.log("output ---> " + evaluvate(input));
console.log("---------------------------------");
input = "1 + ( 1 + 3 ) * 2";
console.log(`input : ${input}`);
console.log("output ---> " + evaluvate(input));
console.log("---------------------------------");
input = "1 + 2 / ( 1 + 3 ) * 2";
console.log(`input : ${input}`);
console.log("output ---> " + evaluvate(input));
console.log("---------------------------------");
