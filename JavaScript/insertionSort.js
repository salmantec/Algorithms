// Unsorted number collections
let unsortedArray = [2, 56, 42, 31, 67, 10, 4, 8, 100, 32, 42];

for (let i = 0; i < unsortedArray.length; i++) {
    let currentValue = unsortedArray[i];
    for (let j = i - 1; j > -1; j--) {
        if (unsortedArray[j] > currentValue) {
            unsortedArray[j + 1] = unsortedArray[j];
        } else {
            unsortedArray[j + 1] = currentValue;
            break;
        }
    }
}

console.log(unsortedArray);