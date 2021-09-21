// print odd values 1-20
console.log("Printing odd values from 1 to 20")
for (let i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
        console.log(i)
    }
}

// decreasing multiples of 3
console.log("Printing all values evenly divisible by 3 from 100 down to 0")
for (let i = 100; i >= 0 ; i--) {
    if (i % 3 == 0) {
        console.log(i)
    }
}

// print sequence 4, 2.5, 1, -0.5, -2, -3.5
console.log("prints sequence 4, 2.5, 1, -0.5, -2, -3.5")
let x = 4
while (x >= -3.5) {
    console.log(x)
    x -= 1.5
}

// Sigma
console.log("adding all numbers 0-100")
let sum = 0
for (let i = 0; i <= 100; i++) {
    sum += i
}
console.log(sum)

// Factorial
console.log("printing 12 factorial")
let product = 1
for (let i = 2; i <= 12; i++) {
    product *= i
}
console.log(product)