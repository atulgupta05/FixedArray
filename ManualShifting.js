let array = [1, 2, 3, 4, 5];
let element = 10;
let position = 2; // Insert at index 2

// Shift elements to the right, starting from the last element
for (let i = array.length - 1; i > position; i--) {
    array[i] = array[i - 1];
}

// Insert the new element at the specified index
array[position] = element;

console.log(array); // Output: [1, 2, 10, 3, 4]