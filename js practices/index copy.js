const pi = 3.14159;
let radius;

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myNumber").value;
    radius = Number(radius);
    let circumference;
    circumference = 2 * pi * radius;
    document.getElementById("myH3").textContent = `${circumference}` 
}


//