function ValidateEmail()  
{  
var inputText=document.getElementById("t1").value;
 
if(inputText.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))  
{  
document.write("Valid Email id");

}  
else  
{  
alert("You have entered an invalid email address!");  

  
}  
}  