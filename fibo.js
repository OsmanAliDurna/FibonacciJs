const num = parseInt(prompt("Enter the number of terms: "));

document.write("Fibonacci Series:");

function fibonacci(x) {
  var a = 1,
    b = 0,
    temp;

  while (x >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    x--;
  }
  document.write(b, (sep = ", "));
}
for (let i = 0; i <= num; i++) {
  fibonacci(i);
}
