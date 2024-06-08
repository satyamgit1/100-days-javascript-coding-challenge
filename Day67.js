//* Find the missing number from unsorted array with O(n) complexity

let ar = [2, 7, 8, 5, 1, 4, 3, 6];

function missing(a) {
    let n = a.length;
    let sum = 1;
    for (let i = 2; i <= (n + 1); i++) {
        sum += i;
        sum -= a[i - 2];
    }
    return sum;
}

console.log(missing(ar));