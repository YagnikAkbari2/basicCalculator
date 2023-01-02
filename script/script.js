"use strict";
const number1 = document.querySelector(".number1");
const number2 = document.querySelector(".number2");
const add = document.querySelector(".btn-add");
const substract = document.querySelector(".btn-sub");
const multiply = document.querySelector(".btn-mul");
const dividion = document.querySelector(".btn-div");
const modulo = document.querySelector(".btn-mod");
const btnCalc = document.querySelector(".btn-calc");
const output = document.querySelector(".output");

add.addEventListener("click", function () {
  const ans = Number(number1.value) + Number(number2.value);
  output.value = ans;
});
substract.addEventListener("click", function () {
  const ans = Number(number1.value) - Number(number2.value);
  output.value = ans;
});
multiply.addEventListener("click", function () {
  const ans = Number(number1.value) * Number(number2.value);
  output.value = ans;
});
dividion.addEventListener("click", function () {
  const ans = Number(number1.value) / Number(number2.value);
  output.value = ans;
});
modulo.addEventListener("click", function () {
  const ans = Number(number1.value) % Number(number2.value);
  output.value = ans;
});
