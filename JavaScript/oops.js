var car={
	x:100,
	y:50,
	color:"Matt Black",
	parts_id:["one","two","Three","Four","Five"],
	ride:function () {
		//console.log("The bird is flying at",x,y);
		console.log("The bird is flying at",this.x,this.y);
	}
};

//Class Declaration
class Fruit
{
	constructor(taste,color)
	{
		this.color=color;
		this.taste=taste;
	}
};

let kiwi= new Fruit("limy","dark");

//Class Expressions
let FruitClass=class{
	constructor(taste,color)
	{
		this.taste=taste;
		this.color=color;
	}
}

let kiwi2=new FruitClass("sour","brown");