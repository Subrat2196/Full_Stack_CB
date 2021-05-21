// var employee ={
//     id:1,
//     greet:function(){
//         console.log(this.id)
//     },
// };

// employee.greet()

// // Here setting timeout
// var employee2 ={
//     id:1,
//     greet:function(){
        
//         setTimeout(function(){console.log(this.id)},1000)
//     },
// };

// //saving the context of this
// var employee3 ={
//     id:1,
//     greet:function(){
//         let self=this
//         setTimeout(function(){console.log(self.id)},1000)
//     },
// };

// employee3.greet()

//using arrow function to do the same 
var employee4 ={
    id:1,
    greet:function(){
        setTimeout(()=>{console.log(this.id)},1000)
    },
};

employee4.greet()