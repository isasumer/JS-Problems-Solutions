const movements = [100, 300, -200, 500, -400, 225, 1000, -700];
// // // 1
// // // You deposited $xx
// // // You withdrew $xxx 

let arrDeposits = [];
let arrWithdraws = [];
// // for each
movements.forEach(element => element > 0 ? console.log(`You deposite ${element}`) :  
                                            console.log(`You withdrew ${element}`)) 

movements.forEach(element => element > 0 ? arrDeposits.push(element) : arrWithdraws.push(element))

console.log(arrDeposits)
console.log(arrWithdraws)

let sum1 = 0;
let sum2 = 0;
arrDeposits.forEach(element => sum1+=element)
console.log(`ArrDeposit sum =${sum1}`)
arrWithdraws.forEach(element => sum2+=element)
console.log(`ArrWithdraws sum =${sum2}`)




/////////////////// M a P  ///////////////////////


// // map initials
// const str = 'Clarusway Online Career IT Training School';
// let arrWord = (str.split(" "))
// let newArr = []
// console.log(str)
// arrWord.forEach(element => console.log(element[0]))
// arrWord.forEach(element => newArr.push(element[0]))



/////////////////////****M a p 2 *///////////

// map

const str = 'The Quick Brown Fox'; // tHe YeLLoW fOx  // Write a JavaScript program which accept a string as input and swap 
// the case of each character. For example if you input 
// 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'

let arrWord = (str.split(""))
let strnew = "";
arrWord.forEach(element => element == element.toUpperCase() ? strnew += element.toLowerCase() : strnew+=element.toUpperCase())

console.log(strnew)

//["T", "h", "e", " ", "Q", "u", "i", "c", "k", " ", "B", "r", "o", "w", "n", " ", "F", "o", "x"]