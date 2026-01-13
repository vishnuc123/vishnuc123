/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    let arr = num.split("")
    console.log(arr)
    if(Number(arr[arr.length-1])>0)return num
    for(let i = arr.length-1 ; i>=0;i--){
        if(Number(arr[i])!==0){
            let val =arr.splice(0,i+1)
            return val.join("")
        }
    }
   
};