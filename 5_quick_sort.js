const arr = [16, 34, 4, 47, 0, 40, 10, 15, 1, 28, 10, 45, 39, 29, 48];
let count = 0;

function quickSort(array) {
   if (array.length <= 1) {
       return array;
   }
   let pivotIndex = Math.floor(array.length / 2);
   let pivot = array[pivotIndex];
   let less = [];
   let greater = [];
   for (let i = 0; i < array.length; i++) {
    if (i === pivotIndex) {
        continue;
    }
    if (array[i] < pivot) {
        less.push(array[i]);
    } else {
        greater.push(array[i]);
    }  
    count++; 
   }
   return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log(quickSort(arr));
console.log(count);