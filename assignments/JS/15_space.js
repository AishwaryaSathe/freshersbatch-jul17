function space()
{


var str=document.getElementById("t1").value;
//var str ="This is      javascript";
console.log("String with excess spaces:", str);
//document.write("String with excess spaces:<br>" +str);

str = str.replace(/\s+/g, " ");
//document.write("<br>without excess spaces:<br>" +str);
console.log("String without excess spaces:", str);
}