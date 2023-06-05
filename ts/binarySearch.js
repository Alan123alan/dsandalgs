var binarySearch = function (haystack, needle) {
    var lo = 0;
    var hi = haystack.length;
    var returnVal = false;
    do {
        var m = Math.floor(lo + ((hi - lo) / 2));
        if (haystack[m] == needle) {
            return true;
        }
        else if (haystack[m] > needle) {
            hi = m;
        }
        else {
            lo = m + 1;
        }
    } while (hi > lo);
    return false;
};
var myArray = [2, 3, 4, 5, 6, 8, 9, 10, 13];
console.log(binarySearch(myArray, 2));
console.log(binarySearch(myArray, 3));
console.log(binarySearch(myArray, 7));
console.log(binarySearch(myArray, 12));
