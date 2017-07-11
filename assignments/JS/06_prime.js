function checkPrime()
{
	var num1= document.getElementById("t1").value;
	var num2= document.getElementById("t2").value;
	var arr=[];
	var flag=1;
   
	for(i = num1; i <= num2; i++)
    {
    	
        for( j = 2; j <= i/2; j++)
        {
            if(i % j == 0)
            {
                flag = 0;
                break;
			}
             
		}
       
        if(flag !=0)
         {
			 arr.push(i);
            /*document.write(i);
			document.write("<br>")*/
         }
         flag=1;
}		
   
document.write(arr);
}