const textbox = document.getElementById("textbox");
const Celsius = document.getElementById("Celsius");
const fahrenheit = document.getElementById("fahrenheit");
const total = document.getElementById("total");

function convert()
{
     if(Celsius.checked){
        console.log("celcise");
     }
     else if(fahrenheit.checked){
        console.log("fahrenheit");
     }
     else{
        console.log("please select unit");
     }

}