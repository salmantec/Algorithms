// Def: It will increase one by one to match / find the target value
// Time complexity: O(n) -> Linear time

function linearSearch(numbersList, targetValue) {
    for (let i = 0; i < numbersList.length; i++) {
        if (numbersList[i] === targetValue) return i;
    }
    return 'None';
}

const targetValue = 9;
const numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = linearSearch(numbersList, targetValue);
console.log(result);