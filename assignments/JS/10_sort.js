function sort()
{
	
	var arr=[2,6,11,89,10]
	document.write("Array is  " +arr);
	 var r = confirm("Do you want to sort in ascending order?");
    if (r == true)
	{
        for(i=0;i<arr.length;i++)
		{
			for(j=i+1;j<arr.length;j++)
			{
				if(arr[i]>arr[j])
				{
					var temp=arr[i];
					arr[i]=arr[j];
					arr[j]=temp;
				}
			}
		}
		
	
		document.write( "<br><br>" + "Ascending order  " +arr);
    } 
	
	else {
		 for(i=0;i<arr.length;i++)
		{
			for(j=i+1;j<arr.length;j++)
			{
				if(arr[i]<arr[j])
				{
					var temp=arr[i];
					arr[i]=arr[j];
					arr[j]=temp;
				}
			}
		}
		
		document.write( "<br><br>" + "Descending order  " +arr);
       
    }
	
	
		
}