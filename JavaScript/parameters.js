let value=function(val=10,bonus=20){
    console.log(val+bonus)
}

value()
value(20,30)
value(40)
// value(,30)  In such case we need to put the value as undefined 
value(undefined,40)

//Rest and Spread

let displaycolor=function(){
    console.log(message)

    for(let i in arguments)
    {
        console.log(arguments[i])
    }
}

message="hello these are your color/colors"

displaycolor(message,"Blue")
displaycolor(message,"Blue","Red")
displaycolor(message,"Blue","Red","Green")

//Two times printed the message due to message being the part of argument list

let displaycolor=function(){
    console.log(message)

    for(let i in arguments)
    {
        console.log(arguments[i])
    }
}

message="hello these are your color/colors"

displaycolor(message,"Blue")
displaycolor(message,"Blue","Red")
displaycolor(message,"Blue","Red","Green")


