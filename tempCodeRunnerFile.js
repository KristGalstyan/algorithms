const array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let count = 0;

function binarySearch(array, item) {
    let start = 0;
    let end = array.length;
    let middle = Math.floor((start + end) / 2);
    let position = -1;
    let found = false;

    while (found === false && start < end) {
        count++;
        if (array[middle] === item) {
            found = true;
            position = middle;
            return position;
        }
        if (item < array[middle]) {
            end = middle;
        } else {
            start = middle;
        }
    }
    return position;
}

console.log(binarySearch(array, 4));
console.log(count);