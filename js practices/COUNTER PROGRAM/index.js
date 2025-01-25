const myCounter = document.getElementById("myCounter");
const increaseBtn = document.getElementById("increaseBtn");
let resetBtn = document.getElementById("resetBtn");
const decreaseBtn = document.getElementById("decreaseBtn");

let counter = 0;
increaseBtn.onclick = function(){
    counter++;
    myCounter.textContent = `${counter}`;
}
decreaseBtn.onclick = function(){
    counter--;
    myCounter.textContent = `${counter}`;
}
resetBtn.onclick = function(){
    counter =0;
    myCounter.textContent = `${counter}`;
}