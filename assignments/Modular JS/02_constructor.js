function emp(_empid,_empname,_empsal,_deptno)
	{
		this.empid=_empid;
		this.empname=_empname;
		this.empsal=_empsal;
		this.deptno=_deptno;
	}

	var EmployeeList = (function(){
	var employee=[];
	
		return{
		add: function(emp) {employee.push(emp);},
		get: function() {return employee;},
		sort: function() { employee.sort(function(a,b){return a.empid-b.empid})}
	}
	})();
	
function test()
{
var obj=new emp(1,"abc",40000,11);
EmployeeList.add(obj);

var obj1=new emp(51,"xyz",60000,12);
EmployeeList.add(obj1);

var obj2=new emp(19,"pqr",40000,10);
EmployeeList.add(obj2);

var obj3=new emp(2,"lmn",40000,14);
EmployeeList.add(obj3);

var employeeess=EmployeeList.get();
console.log(employeeess);

 var sorted=EmployeeList.sort();
 console.log(sorted);
 }


		