// 1. Find the maximum element in an array.

/**
 *  arr = [10, 20, 20,50,70];
 *  max = arr[i]
 * **/

const find_max_element = (arr) => {
    let max = arr[0];
    let i = 0;
    while (i<arr.length) {
        if (arr[i] > max) {
            max = arr[i];
        }
        i++;
    }
    return max;
}

console.log(find_max_element([1, 2, 3, 4, 5]));  // 5
console.log(find_max_element([-10, -3, 0, 99, 50]));  // 99
console.log(find_max_element([5]));  // 5
console.log(find_max_element([100, 100, 100]));  // 100
