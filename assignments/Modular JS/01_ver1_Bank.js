
	var BankAccount = {
	accNo :123,
	accBal :2000,
	accName :"Aiswarya",

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
	console.log("Acc no: ",BankAccount.accNo);
	console.log("Acc Name: ",BankAccount.accName);
	console.log("Acc Balance: ",BankAccount.accBal);

	console.log("Withrawing 200 from BankAccount",BankAccount.withdraw(200));
	console.log("Depositing 500 to BankAccount",BankAccount.deposit(500));
}
