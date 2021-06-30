function factorial(n) {
    if (n == 0 || n === 1)
      return 1;
    for (var i = n - 1; i >= 1; i--) {
      n *= i;
    }
    return n;
}
  
  let n =prompt ("Please enter a number")
  console.log(`The factorial of ${n} is ${factorial(n)}`);
