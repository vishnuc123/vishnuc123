/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    const alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let arr = s.split("")
    let value = ""
    for(let i = 0 ; i< arr.length ;i++){
        for(let j = 0 ; j< alpha.length;j++){
            if(arr[i] ===alpha[j]){
                value+=j+1
            }
        }
        
    }
    for(let i = 1 ; i<= k; i++){
        let arr = value.split("")
        console.log(arr)
        let sum = 0
        for(let val of arr){
            
            sum+=Number(val)
        }
        value = String(sum)
    }
    // console.log(value)
    return Number(value)
    
};