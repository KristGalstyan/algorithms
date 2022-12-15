const arr = [3,5,66,78,23,44,11,32,58,-1,-5, 23,9,2,35,6,3,32]; 
let count = 0;

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[indexMin]) {
                indexMin = j;
            }
            count++;
        }
        let tmp = array[i]; 
        array[i] = array[indexMin]; 
        array[indexMin] = tmp; 
    }
    return array;
}

console.log(selectionSort(arr));
console.log(count);