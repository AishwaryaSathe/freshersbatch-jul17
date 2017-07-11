
	function BankAccount(_accNo,_accName,_accBal)
{
		accNo=_accNo;
		accName=_accName;
		accBal=_accBal;
	var obj1={
		add:function(amt)
		{
		accBal=accBal-amt;
			//return this.accBal;
		},
			remove:function(amt)
		{
			accBal=accBal+amt;
			//return this.accBal;
		},
		
		getbal:function()
		{
			return accBal;
		},
		getacc:function()
		{
			return accNo;
		},
		getname:function()
		{
			return accName;
		}
		}
		return obj1;
			
}	
	
	
	
	function Bank()
{
	var obj=new BankAccount(123,"Aishwarya",2000);
	
	
	console.log("Acc no: ",obj.getacc());
	console.log("Acc Name: ",obj.getname());
	console.log("Acc Balance: ",obj.getbal());
obj.add(200)
	console.log("Withrawing 200 from BankAccount",obj.getbal());
	obj.remove(500)
	console.log("Depositing 500 to BankAccount",obj.getbal());
}
