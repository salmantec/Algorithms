// Unsorted number collection
let unsortedArray = [2, 56, 42, 31, 67, 10, 4, 8, 100, 32, 42];
let sortedArray = [];
// Loop through the array of number with len(arr) times
for (let j = 0; j < unsortedArray.length; j++) {
    // Loop through the array of numbers
    for (let i = 0; i < (unsortedArray.length - 1); i++) {
        if (unsortedArray[i] > unsortedArray[i + 1]) {
            // Swap the values
            var temp = unsortedArray[i]
            unsortedArray[i] = unsortedArray[i + 1]
            unsortedArray[i+1] = temp
        }
    }
}

console.log('----------->', unsortedArray);