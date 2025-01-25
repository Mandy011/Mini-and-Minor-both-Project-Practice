const myCheckedBox = document.getElementById("myCheckedBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const myP1 = document.getElementById("myP1");
const myP2 = document.getElementById("myP2");

mySubmit.onclick = function(){
    if(myCheckedBox.checked){
        myP1.textContent = `You are Subscirbed!`
    }
    else {
        myP1.textContent = `You are not Subscirbed!`
    }
    if(visaBtn.checked){
        myP2.textContent = `You selected visa payment method`
    }
   else if(masterCardBtn.checked){
        myP2.textContent = `You selected masterCard payment method`
    }
   else if(paypalBtn.checked){
        myP2.textContent = `You selected Paypal payment method`
    }
    else {
        myP2.textContent=`Please select the payment method`
    }
}