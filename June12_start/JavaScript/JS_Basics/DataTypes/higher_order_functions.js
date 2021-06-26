function creategreeter(value)
{

    function greet(name)
    {
        console.log(value,name)
    }

    return greet

}

let x=creategreeter('Good Morning')
console.log(typeof x)

console.log(x('Subrat'))