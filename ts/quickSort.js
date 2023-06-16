var sort = function (arr, lo, hi) {
    if (lo >= hi) {
        return;
    }
    var pivotIndex = partition(arr, lo, hi);
    sort(arr, lo, pivotIndex - 1);
    sort(arr, pivotIndex + 1, hi);
};
var partition = function (arr, lo, hi) {
    var pivot = arr[hi];
    var indx = lo - 1;
    for (var i = lo; i < hi; i++) {
        if (arr[i] <= pivot) {
            indx++;
            var temp = arr[indx];
            arr[indx] = arr[i];
            arr[i] = temp;
        }
    }
    indx++;
    arr[hi] = arr[indx];
    arr[indx] = pivot;
    console.log(arr);
    return indx;
};
var quickSort = function (arr) {
    var lo = 0;
    var hi = arr.length - 1;
    sort(arr, lo, hi);
};
var myArr = [0, 3, 2, 4, 1];
console.log(quickSort(myArr));
console.log(myArr);
