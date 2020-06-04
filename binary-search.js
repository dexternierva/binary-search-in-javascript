function binarySearch(arr, value) {
    let start = 0;
    let end = arr.length - 1;
    let mid;

    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        
        if (value == arr[mid]) {
            return mid;
        } else if (value < arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return -1;
}

console.log(binarySearch([2, 6, 13, 21, 36, 47, 63, 81, 97], 81));