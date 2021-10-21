// Unsorted number collections
let unsortedArray = [2, 56, 42, 31, 67, 10, 4, 8, 100, 32, 42];


for(let i = 0; i < unsortedArray.length; i++) {
    // Finding the smallest number in the subarray
    let min = i;
    for(let j = i+1; j < unsortedArray.length; j++){
        if(unsortedArray[j] < unsortedArray[min]) {
            min=j; 
        }
     }
     if (min != i) {
         // Swapping the elements
         let tmp = unsortedArray[i]; 
         unsortedArray[i] = unsortedArray[min];
         unsortedArray[min] = tmp;      
    }
}

console.log(unsortedArray);