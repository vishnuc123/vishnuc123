/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let temp = []
    let result = []
    for(let i = 0 ; i <= n ; i++){
        let conv = i.toString(2)
        temp.push(conv)
    }
    console.log(temp)
    for(let val of temp){
        let tempcount = 0
        let checkone = val.split("")
        for(let item of checkone){
            if(item === "1"){
                tempcount++
            }
        }
        result.push(tempcount)

        
    }
    return result
};