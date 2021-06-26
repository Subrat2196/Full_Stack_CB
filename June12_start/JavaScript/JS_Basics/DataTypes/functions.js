let gamma=function(){
    return "C"
}

console.log(gamma());

// Here we dont use the data types in arguments nor a datatype in the return value
function area(height,width)
{
    if(typeof width=='undefined'){
        return Math.PI*height*height
    }
    return height*width
}

function hello(){
    console.log('Hello World ',arguments);
}

function hello_new(){
    console.log('Come on  ' + arguments[0]+'  '+ arguments[1])
}


