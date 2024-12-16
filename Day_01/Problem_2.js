const find_the_min = (arr) => {
    let min = arr[0];
    arr.map((item) => {
        if (item < min) min = item;
    })

    return min;
}

function findMin(arr) {
    let min = arr[0];
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] < min)
            min = arr[index];

    }
    return min;
}

const find_the_min_3 = (arr) => {
    let min = arr[0];
    arr.forEach((item) => {
        if (item < min) min = item;
    });
    return min;
}


console.log(find_the_min([1, 2, 3, 4, 5]));  // 1
console.log(find_the_min([-10, -3, 0, 99, 50]));  // -10
console.log(find_the_min([5]));  // 5
console.log(find_the_min([100, 100, 100]));  // 100


/**
 * 
 * Differences:
find_the_min:
Uses map() to iterate over the array.
Although map() works here, it's not the ideal method because map() is meant to transform an array, not just iterate over it. For simple iteration, forEach() or a for loop is more appropriate.
findMin:

Uses a for loop, which is the more efficient and traditional way to iterate over the array, making it clearer and slightly faster since no extra transformation is performed.
Suggested improvements:
In the first function (find_the_min), replacing map() with forEach() would make the intent clearer.
 * 
 * **/