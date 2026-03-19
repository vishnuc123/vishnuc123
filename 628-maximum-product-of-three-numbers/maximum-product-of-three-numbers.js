/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    let sort = nums.sort((a, b) => {
        if (a < b) return -1;
        else if (a > b) return 1;
        else return 0;
    });

    let product1 = 1;

  
    for (let i = sort.length - 1; i >= sort.length - 3; i--) {
        product1 *= sort[i];
    }
    let product2 = sort[0] * sort[1] * sort[sort.length - 1];

    return Math.max(product1, product2);


};