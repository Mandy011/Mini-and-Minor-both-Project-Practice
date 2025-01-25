let age;
let isLicences=false;
document.getElementById("mySubmit-bttn").onclick = function(){
    age = document.getElementById("myResult").value ;
    if ( age >=18){
        document.getElementById("myH3").textContent = `You are eligible for vote because your age is ${age} `
        if(isLicences){
            document.getElementById("myH3").textContent = `You are eligible for vote because your age is ${age} and you have also licence`
        }
        else{
            document.getElementById("myH3").textContent = `You have not a licence to vote but age is ${age} You are eligible for vote`
        }
    }
    else{
        document.getElementById("myH3").textContent = `You are not eligible for vote because your age is ${age} `
    }
}