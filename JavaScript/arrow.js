const normal_val=function(){
    return 10
}
console.log(normal_val())

const arrow_val=() =>{
    return 10
}
console.log(arrow_val())
//
const arrow_value=()=> 10  //This is the syntax when we are using just one statement
//
console.log(arrow_value())

// const multiplier=(m)=> 10*m

//when we write a single argument we can even replace the argument paranthesis

const multiplier = m => 10 * m

