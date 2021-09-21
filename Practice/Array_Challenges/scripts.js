// always hungry
function alwaysHungry(arr) {
    let foodFound = false

    for (let i = 0; i < arr.length; i++) {
        let entry = arr[i]
        if (entry == "food") {
            console.log("yummy")
            foodFound = true
        }
    }

    if (!foodFound) {
        console.log("I'm hungry")
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"])
// this should output "yummy", "yummy"
alwaysHungry([4,1,5,7,2])
// this should output "I'm hungry"


// High Pass Filter
function highPass(arr, cutoff) {
    var filteredArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element > cutoff) {
            filteredArr.push(element)
        }
    }

    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


// Better than average
function betterThanAverage(arr) {
    var sum = 0;
    var avg = 0
    // calculate average
    for (let i = 0; i< arr.length; i++) {
        const element = arr[i];
        sum += element
    }
    var avg = sum / arr.length 

    var count = 0
    // count how many values are greated than the average
    for (let i = 0; i< arr.length; i++) {
        const element = arr[i];
        if (element > avg) {
            count ++
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4


// array reverse
function reverse(arr) {
    reverse_arr = []

    for (let i = arr.length - 1; i >= 0; i--) {
        const element = arr[i];
        let temp = element
        reverse_arr.push(temp)
    }
    arr = reverse_arr

    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]


// fibonacci array
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    while (fibArr.length < n) {
        let next = fibArr[fibArr.length - 2] + fibArr[fibArr.length - 1]
        console.log(`${fibArr[fibArr.length - 2]} + ${fibArr[fibArr.length-1]} = ${next}`)
        fibArr.push(next)
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
