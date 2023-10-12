function ArraySortDescending(arr) {
    var n = arr.length;
    var swapped;

    do {
        swapped = false;
        for (var i = 0; i < n - 1; i++) {
            if (arr[i] < arr[i + 1]) {
                // Swap elements if they are in the wrong order
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}


var unsortedArray = [5, 2, 9, 1, 5, 6];
var sortedArray = ArraySortDescending(unsortedArray);
console.log("Sorted in descending order:", sortedArray);
