let minusKey = document.getElementById("minus");
let multiplyKey = document.getElementById("multiply");
let divideKey = document.getElementById("divide");
let modKey = document.getElementById("mod");
let plusKey = document.getElementById("plus");
let nineKey = document.getElementById("nine");
let eightKey = document.getElementById("eight");
let sevenKey = document.getElementById("seven");
let sixKey = document.getElementById("six");
let fiveKey = document.getElementById("five");
let fourKey = document.getElementById("four");
let equalsKey = document.getElementById("equals");
let threeKey = document.getElementById("three");
let twoKey = document.getElementById("two");
let oneKey = document.getElementById("one").innerText;
let decimalKey = document.getElementById("decimal");
let zeroKey = document.getElementById("zero");
let clearKey = document.getElementById("clear");

let displayNum = document.getElementById("display-number");

displayNum.innerHTML = 3;

// const add = (num, modifier) => {
//     return num + modifier;
// }
// const subtract = (num, modifier) => {
//     return num - modifier;
// }
// const mulitply = (num, modifier) => {
//     return num * modifier;
// }
// const divide = (num, modifier) => {
//     return num / modifier;
// }
// const mod = (num, modifier) => {
//     return num % modifier;
// }

// function logNums(event) {
//     displayNum.innerHTML = event.target.dataset.value;
// }

function clear() {
    displayNum.innerHTML = "";
}

clearKey.onclick = clear;
oneKey.onclick = displayNum.innerHTML + 1;

document.querySelectorAll("button").onclick = event => {
    console.log(event.target.dataset.value);
    let curNum = event.target.dataset.value;
    displayNum.innerHTML = curNum;

}

// document.querySelectorAll("button[data-value]").addEventListener("click", event => {
//     displayNum.innerHTML = event.target.dataset.value;
// });
