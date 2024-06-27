console.log("HJello")
let a = 6

// function factorial(number){
//     let abcd= Array.from(Array(number+1).keys())
//     // console.log(abcd.slice(1))
//     let c = abcd.slice(1).reduce((a,b)=>{
//         return a*b
//     });
//     console.log(c)
//     // return c
// }
// factorial(5)

function facfor(number){
    let f=1
    for (let i = 1; i <= number; i++) {
        f = f*i;
    }
    return f
}

console.log(facfor(6))