function insertionSort(arr) {
    // Iterate over the array from the second element to the last element
    for (let i = 1; i < arr.length; i++) {
        // Store the current element as the key
        let key = arr[i];
        // Initialize a variable to keep track of the previous index
        let j = i - 1;

        // Move elements of arr[0..i-1] that are greater than the key to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        // Place the key at its correct position
        arr[j + 1] = key;
    }
    return arr;
}

// Example usage
let array = [5, 4, 3, 2, 1];
console.log("Original array:", array);

let sortedArray = insertionSort(array);
console.log("Sorted array:", sortedArray);
