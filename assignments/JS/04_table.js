function table()
{
var num=prompt("ENter a number");
var r;
var i=1;
while(i<=10)
{
	document.write(num+" * "+i+" ="+(num*i));
	document.write("<br>");
	i++;
}
r=confirm("do you want to continue?");
if(r==true)
	table();

}