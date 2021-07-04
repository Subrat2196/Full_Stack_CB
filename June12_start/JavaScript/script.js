function outer(arg1,arg3)
{
    let x=20
    let var1=10
    function inner(arg2) {
        let x=10
        let var2 =20
        console.log(arguments[0])
        console.log(arg1,var1,arg2,var2,x)
        
    }

    return inner
}

let x=outer('param1','y')
x('param2')

for(var i=1;i<=5;i++)
{
    setTimeout(function(){console.log(i)},1000)
}

for(let i=1;i<=5;i++)
{
    setTimeout(function(){console.log(i)},2000)  //the time is in milliseconds
}

const obj={
    name:"Subrat",
};

// obj={}  It will give error that assignment to constant object 

obj.name="Chandler"

console.log(obj.name)