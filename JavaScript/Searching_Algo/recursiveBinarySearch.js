// Def: It works on Divide and conquer approach
// Pre-req: It used to search any element in a sorted array
// Time complexity: O(logN) -> Logarithmic

// Here we have used recursive to divide the numbers list,
// So we can return true / false only instead the index of target. 
// Because while calling the recursive function we're mutating the input array of numbers list

function recursiveBinarySearch(numbersList, targetValue) {
    // Check numbersList length
    if (numbersList.length === 0) return false;
    else {
        console.log('list', numbersList.length);
        const midPoint = Math.floor(numbersList.length / 2);
        console.log('midpoint', midPoint);
        if (numbersList[midPoint] === targetValue) return true;
        else if (numbersList[midPoint] < targetValue) return recursiveBinarySearch(numbersList.slice(midPoint+1), targetValue);
        else return recursiveBinarySearch(numbersList.slice(0, midPoint), targetValue);
    }
}

const targetValue = 9;
const numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = recursiveBinarySearch(numbersList, targetValue);
console.log(result);