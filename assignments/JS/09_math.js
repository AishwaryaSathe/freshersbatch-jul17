function math()
{
	var total=0
	var arr=[2,6,11,89,10]
	document.getElementById("t1").value=arr;
	var min1=Math.min(...arr);
	document.getElementById("t2").value=min1;
	var max1=Math.max(...arr);
	document.getElementById("t3").value=max1;
	for(i=0;i<arr.length;i++)
	{
		 total += arr[i];
	}
	document.getElementById("t5").value=total;
	
	avg=total/arr.length;
	document.getElementById("t4").value=avg;
	
	
		
}