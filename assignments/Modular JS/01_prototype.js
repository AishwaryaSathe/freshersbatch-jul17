
	function BankAccount(_accNo,_accName,_accBal)
{
		this.accNo=_accNo;
		this.accName=_accName;
		this.accBal=_accBal;
}
		BankAccount.prototype.add=function(amt)
		{
		this.accBal=this.accBal-amt;
			//return this.accBal;
		};
		BankAccount.prototype.remove=function(amt)
		{
			this.accBal=this.accBal+amt;
			//return this.accBal;
		};
		
		BankAccount.prototype.getbal=function()
		{
			return this.accBal;
		};
		BankAccount.prototype.getacc=function()
		{
			return this.accNo;
		};
		BankAccount.prototype.getname=function()
		{
			return this.accName;
		};
		
		
			
	
	
	
	
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
