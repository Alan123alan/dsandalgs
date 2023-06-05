var linearSearch = function (haystack, needle) {
    for (var i = 0; i < haystack.length; i++) {
        // console.log(haystack[i], needle);
        if (haystack[i] === needle) {
            return true;
        }
    }
    return false;
};
var myArray = [1, 2, 3, 4, 5, 6, 7, 9, 29];
console.log(linearSearch(myArray, 28));
console.log(linearSearch(myArray, 1));
console.log(linearSearch(myArray, 2));
