
	var BankAccount = {
	accNo :0,
	accBal :0,
	accName :"xyz",

		withdraw: function(amt)
		{
			var newBal=this.accBal-amt;
			this.accBal=newBal;
			return this.accBal;
		},

		deposit: function(amt)
		{
			 var newaccBal=this.accBal+amt;
			 this.accBal=newaccBal
			return this.accBal;
		}
	};
	
function Bank()
{
	var bank=Object.create(BankAccount);
	bank.accNo=123;
	bank.accBal=2000;
	bank.accName="Aishwarya";
	
	console.log("Acc no: ",bank.accNo);
	console.log("Acc Name: ",bank.accName);
	console.log("Acc Balance: ",bank.accBal);

	console.log("Withrawing 200 from BankAccount",bank.withdraw(200));
	console.log("Depositing 500 to BankAccount",bank.deposit(500));
}
