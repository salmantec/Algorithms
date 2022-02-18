// Def: It works on Divide and conquer approach
// Pre-req: It used to search any element in a sorted array
// Time complexity: O(logN) -> Logarithmic

// Here we have used first and last to divide the numbers list

function binarySearch(numbersList, targetValue) {
    let first = 0;
    let last = numbersList.length - 1;

    while (first <= last) {
        let midPoint = Math.floor((first + last)/2);
        if (numbersList[midPoint] === targetValue) return midPoint;
        else if (numbersList[midPoint] < targetValue) first = midPoint + 1;
        else last = midPoint - 1;
    }

    return 'None';
}

const targetValue = 9;
const numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = binarySearch(numbersList, targetValue);
console.log(result);