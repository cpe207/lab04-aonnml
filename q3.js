function primeNumber(a) {
    let x = 0;
    for (let i=2; i<a; i++) {
        if (a % i === 0) {
            x++;
        }
    }
    if (x > 0) return "NO";
    else return "YES";
  }
var d1 = 10;
var d2 = 29;
var d3 = 2;
console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));
module.exports = primeNumber;
