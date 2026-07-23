/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let a = x.toString()
    let arr = a.split("")
    let rev = arr.reverse()
    return rev.join("") == x
};