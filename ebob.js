var a = prompt('lütfen bir sayı giriniz : ');
var b = prompt('lütfen bir sayı daha giriniz');
let ebob;
if (a > b) {
    ebob= b ;
}
else {
    ebob = a;
}
while( a % ebob != 0 || b % ebob != 0) {
    ebob --;
}
console.log({a},"ve",{b} ,"sayılarının ebobu :",ebob);