# binary-search-in-javascript
Javascript function that searches for a value in an array using Binary Search

## Pseudocode
1. Create a function that accepts a sorted array and a value
2. Create a start and end pointer
3. Create a loop that runs as long as start pointer comes before the right pointer.
  - Compare value with middle element, if equal return mid.
  - If value is less than middle element adjust end pointer accordingly
  - If value is greater than middle element adjust start pointer accordingly
4. Return -1 if value is not found.

## Code
```javascript
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
```

### Usage
```javascript
console.log(binarySearch([2, 6, 13, 21, 36, 47, 63, 81, 97], 81));
```
