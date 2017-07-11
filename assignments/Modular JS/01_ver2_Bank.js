function Bank()
{
	function BankAccount(_accNo,_accName,_accBal)
	{
		this.accNo=_accNo;
		this.accName=_accName;
		this.accBal=_accBal;
		this.add=function withdraw(amt)
	{
		this.accBal=this.accBal-amt;
		return this.accBal;
	},
	this.remove=function deposit(amt)
	{
		this.accBal=this.accBal+amt;
		return this.accBal;
	}
	
	}
	
	
	
	
	
	var obj=new BankAccount(123,"Aishwarya",2000);
	
	
	console.log("Acc no: ",obj.accNo);
	console.log("Acc Name: ",obj.accName);
	console.log("Acc Balance: ",obj.accBal);

	console.log("Withrawing 200 from BankAccount",obj.add(200));
	console.log("Depositing 500 to BankAccount",obj.remove(500));
}
