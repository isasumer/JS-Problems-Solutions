function fizzbuzz(n){
    for (let i = 1; i < n; i++) {
        console.log (` ${i} : ${ i % 3 === 0 && i % 5 === 0 ? 'fizz-buzz' :
        ( i % 5 === 0 ? 'buzz' :  ( i % 3 === 0  ? 'fizz' : i ) ) }`)
    }
}
let n = prompt("Please enter a number")
fizzbuzz(n) ;

/* function fizzbuzz(n){
    for (let i = 1; i < n; i++) {
        if (i%3 === 0){
        console.log(`${i} : fizz `)
        } 
        else if (i%5 ===0) {
            console.log(`${i} : buzz `)
        } 
        else if (i%3 ===0 && i%5===0 ) {
            console.log(`${i} : fizz-buzz `)
        }
        else 
            console.log(i + " : " + i)
        
}
}
let n = prompt("Please enter a number");
fizzbuzz(n); */