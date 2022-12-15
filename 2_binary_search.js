const array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let count = 0;

function binarySearch(array, item) {
    let start = 0;
    let end = array.length;
    let position = -1;
    let found = false;

    while (found === false && start <= end) {
        count++; 
        let middle = Math.floor((start + end) / 2);
        if (array[middle] === item) {
            found = true;
            position = middle;
            return position;
        }
        if (item < array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return position;
}



// Binary algorithm on recursive
function recursiveBinarySearch(array, item, start, end) {
    let middle = Math.floor((start + end) / 2);
     count += 1;
    if (item === array[middle]) {
        return array[middle];
    }
    if (item < array[middle]) {
        return recursiveBinarySearch(array, item, start, middle - 1);
    } else {
        return recursiveBinarySearch(array, item, middle + 1 , end);
    }
    
}

console.log(recursiveBinarySearch(array, 12, 0, array.length));
console.log(count);