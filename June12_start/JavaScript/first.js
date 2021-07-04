let a=10;
console.log("hello World");
let b=[1,2,3,4,5]
console.log(b);

function fun() {
	let a=5;
	if(a==5)
	{
		let b=10;
	console.log("inside",b);
	}
}
function fun1()
{
	let c=5;
	if(c==5)
	{
		//let f=5;
		var f=5;
	}
		console.log("Outside1",f);
		// If we will take it as let it will only have a block scope so we need to change it to var for function scope	


}

console.log("Outside",b);
square_root(10);
//function declaration way
function square_root(n)
{
	return Math.sqrt(n);
}

//function expression
var squrt=function(n)
{
	return Math.sqrt(n); 
}

squrt(10);


let arr=["Apple","banana","Chiku"];