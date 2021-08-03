//Klasik fonksiyon
function hello(firstName) {
    console.log(`Merhaba ${firstName}`)
}
hello("JavaScript")

//1. yöntem

const helloFuncV1 = (firstName) => {console.log(`Merhaba ${firstName}`)}
helloFuncV1 ("HelloFuncV1")

//2. yöntem

const helloFuncV2 = firstName => console.log(`Merhaba ${firstName}`)
helloFuncV2 ("HelloFuncV2")

const helloFuncV3 = (firstName, lastName) => console.log(`Merhaba ${firstName} ${lastName}`)
helloFuncV3 ("HelloFuncV3", "last name info")

const funk4 = () => {
    console.log("Merhaba isa")
}
funk4();

const multi = (n1, n2) => n1*n2;
console.log(multi(2,10))

const sayi= x=> x*x
console.log(sayi(6))

//forEach Functions

const seriesList = b => {
    b.forEach((series, index) => {
        console.log(`${index+1}. ${series}`)
    })
}
seriesList(["Firefly", "Avatar","BB", "GOT"])
