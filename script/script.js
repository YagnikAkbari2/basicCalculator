// "use strict";
// const number1 = document.querySelector(".number1");
// const number2 = document.querySelector(".number2");
// const add = document.querySelector(".btn-add");
// const substract = document.querySelector(".btn-sub");
// const multiply = document.querySelector(".btn-mul");
// const dividion = document.querySelector(".btn-div");
// const modulo = document.querySelector(".btn-mod");
// const btnCalc = document.querySelector(".btn-calc");
// const output = document.querySelector(".output");

// add.addEventListener("click", function () {
//   const ans = Number(number1.value) + Number(number2.value);
//   output.value = ans;
// });
// substract.addEventListener("click", function () {
//   const ans = Number(number1.value) - Number(number2.value);
//   output.value = ans;
// });
// multiply.addEventListener("click", function () {
//   const ans = Number(number1.value) * Number(number2.value);
//   output.value = ans;
// });
// dividion.addEventListener("click", function () {
//   const ans = Number(number1.value) / Number(number2.value);
//   output.value = ans;
// });
// modulo.addEventListener("click", function () {
//   const ans = Number(number1.value) % Number(number2.value);
//   output.value = ans;
// });
const btnZero = document.querySelector(".btn-0");
const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");
const btn4 = document.querySelector(".btn-4");
const btn5 = document.querySelector(".btn-5");
const btn6 = document.querySelector(".btn-6");
const btn7 = document.querySelector(".btn-7");
const btn8 = document.querySelector(".btn-8");
const btn9 = document.querySelector(".btn-9");
const btnAdd = document.querySelector(".btn-add");
const btnSub = document.querySelector(".btn-sub");
const btnMul = document.querySelector(".btn-mul");
const btnDiv = document.querySelector(".btn-div");
const btnMod = document.querySelector(".btn-mod");
const btnClear = document.querySelector(".btn-clear");
const btnEqual = document.querySelector(".btn-equal");
const input = document.querySelector(".number");
const btnDot = document.querySelector(".btn-dot");
const btnDoubleZero = document.querySelector(".btn-Double-Zero");
const btnDelete = document.querySelector(".btn-Delete");
let press;
let string1;
let num1;

function init() {
  string1 = "";
  num1 = 0;
  press = "";
}
init();
btnZero.addEventListener("click", function (e) {
  string1 += 0;
  input.value = string1;
});
// document.addEventListener("keyup", function (e) {
//   console.log(e.key);
// });
btn1.addEventListener("click", function () {
  string1 += 1;
  input.value = string1;
});
btn2.addEventListener("click", function () {
  string1 += 2;
  input.value = string1;
});
btn3.addEventListener("click", function () {
  string1 += 3;
  input.value = string1;
});
btn4.addEventListener("click", function () {
  string1 += 4;
  input.value = string1;
});
btn5.addEventListener("click", function () {
  string1 += 5;
  input.value = string1;
});
btn6.addEventListener("click", function () {
  string1 += 6;
  input.value = string1;
});
btn7.addEventListener("click", function () {
  string1 += 7;
  input.value = string1;
});
btn8.addEventListener("click", function () {
  string1 += 8;
  input.value = string1;
});
btn9.addEventListener("click", function () {
  string1 += 9;
  input.value = string1;
});
btnDot.addEventListener("click", function () {
  string1 += ".";
  input.value = string1;
});
btnDoubleZero.addEventListener("click", function () {
  string1 += "00";
  input.value = string1;
});
btnDelete.addEventListener("click", function () {
  string1 = string1.substring(0, string1.length - 1);
  input.value = string1;
});

btnAdd.addEventListener("click", function () {
  num1 = Number(string1);
  input.value = "";
  string1 = "";
  press = "+";
});
btnSub.addEventListener("click", function () {
  num1 = Number(string1);
  input.value = "";
  string1 = "";
  press = "-";
});
btnMul.addEventListener("click", function () {
  num1 = Number(string1);
  input.value = "";
  string1 = "";
  press = "*";
});
btnDiv.addEventListener("click", function () {
  num1 = Number(string1);
  input.value = "";
  string1 = "";
  press = "/";
});
btnMod.addEventListener("click", function () {
  num1 = Number(string1);
  input.value = "";
  string1 = "";
  press = "%";
});
btnEqual.addEventListener("click", function () {
  if (press === "+") {
    num1 = num1 + Number(string1);
  } else if (press === "-") {
    num1 = num1 - Number(string1);
  } else if (press === "*") {
    num1 = num1 * Number(string1);
  } else if (press === "/") {
    num1 = num1 / Number(string1);
  } else if (press === "%") {
    num1 = num1 % Number(string1);
  }
  input.value = num1;
  init();
});
btnClear.addEventListener("click", function () {
  init();
  input.value = "";
});
