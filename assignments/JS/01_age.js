function calc_year()
{
	//console.log("hello");
	var age=document.getElementById("t1").value;
	var date=new Date();
	var y=date.getFullYear();
	var birth=y-age;
	alert(birth);
}