const myH1 = document.getElementById("myH1");
const userName = document.getElementById("userName");
const userPassword = document.getElementById("userPassword");
const submit = document.getElementById("submit");

submit.onclick = function()
{
    userName=userName.value;
    userPassword=userPassword.value;

    if(userName === "userName" &userPassword === "userPassword"){
        myH1.textContent = `Log in Secessfull`;
    }
    else{
        myH1.textContent = `You Enter user name and password`;
    }
}