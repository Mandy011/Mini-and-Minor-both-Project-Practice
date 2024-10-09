const screen = document.getElementById("screen");
const button = document.querySelectorAll("button");

let string = ""
button.forEach(number=>{
    number.addEventListener('click', (event)=>{
        // alert(event.target.innerText);
        let btnText = event.target.innerText;
        screen.value += btnText;

        switch(btnText){
           case "AC" : 
               string = "";
               screen.value = string; 
               break;
         case "Sqrt" :  
                     string = Math.sqrt(string);
                     screen.value = string; 
             break;
             case "=" :
                     string = eval(string);
                     screen.value = string; 
                     break;
         case "C" :
                        string =string.toString().slice(0,-1);
                        screen.value = string; 
                        break;

         default : 
            string += btnText;
            screen.value = string;
        }
/*         if( btnText == "AC"){
           string = "";
             screen.value = string; 
         }
          else if(btnText == "Sqrt"){
            string = Math.sqrt(string);
             screen.value = string; 
            
          }
         else{
             string +=btnText;
            screen.value = string;
            
         } */
        
    })
})