// //0-1-1-2-3-5-8-13-21-34
// //x:how many fibonacci number do you want?
// //y:which number of fibonacci do you want to see?
// let x = prompt ("How many fibonacci numbers do you want?")

// for (i=1; i<=x; i++){

// console.log(fibonacci(i));

// }
// function fibonacci(n) {
//     if (n===1) {
//         return 0;
//     }
//         else if  (n===2) {
//         return 1;
//     }   else {
//         return fibonacci(n-1)+fibonacci(n-2); 
//     }                   
// }

// // function fibonacci(n) {
// //     let first=0;
// //     let second=1;
// //     let sum;
// //     if (n===1) {
// //         return first;
// //        } else if  (n===2) {
// //            return second;
// //        } else {
// //         for(i=0; i<n-2; i++){
// //            sum=first+second;
// //            first=second;
// //            second=sum;
// //         }
// //  return sum;
// //     }
// // }
function myColor(color) {
    if(color !== 'blue' || color !== 'green') {
        color = 'red';
    }
    return color;
}
myColor()