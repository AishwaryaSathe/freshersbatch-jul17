var count=0;
function chance()
{
	count++;
	var usrn= document.getElementById("uname").value;
	var psw= document.getElementById("pswd").value;
	if(usrn=='aish' && pw=='123')
	{	
		alert('successful login.');
		exit;
	}
	else
	{
		alert('Username or password incorrect.Please try again');
		document.getElementById("uname").reset;
		document.getElementById("pswd").reset;
	}
	if(count==3)
			alert('Login ERROR!');
	
}