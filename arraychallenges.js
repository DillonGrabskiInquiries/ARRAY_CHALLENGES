// Challenge 1.

// alwaysHungry([3.14, "food", "pie", true, "food"]);
// alwaysHungry([4, 1, 5, 7, 2]);

// function alwaysHungry(arr) {
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] == "food") {
//             console.log("yummy")
//         } else {
//             console.log("I'm hungry")
//         }
//     }
// }

// Challenge 2.

// function highPass(arr, cutoff) {
//     var filteredArr = [];
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] > cutoff) {
//             filteredArr.push(arr[i])
//         }
//     }
//     return filteredArr;
// }
// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result); // we expect back [6, 8, 10, 9]

// Challenge 3.

// function betterThanAverage(arr) {
//     var sum = 0
//     var count = 0
//     for (i = 0; i < arr.length; i++) {
//         sum += 1
//         if (arr[i] > sum) {
//             count += 1
//         }
//     }
//     return count;
// }
// var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
// console.log(result); // we expect back 4

// Challenge 4.

// function reverse(arr) {
//     arr.reverse()
//     return arr;
// }
// var result = reverse(["a", "b", "c", "d", "e"]);
// console.log(result); // we expect back ["e", "d", "c", "b", "a"]

// Challenge 5.

// function fibonacciArray(n) {
//     // the [0, 1] are the starting values of the array to calculate the rest from
//     var fibArr = [0, 1];
//     for (i = 2; i < 10; i++) {
//         fibArr[i] = fibArr[i - 2] + fibArr[i - 1]
//     }
//     return fibArr;
// }

// var result = fibonacciArray(10);
// console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

