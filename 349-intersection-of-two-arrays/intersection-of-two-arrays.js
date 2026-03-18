/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let result = []
  let x = nums1.sort((a,b) => a-b)
  let y = nums2.sort((a,b) => a-b)
  let set1 = new Set([...x])
  let arr1 = [...set1]
  let set2 = new Set([...y])
  let arr2 = [...set2]
  let i = 0 ; let j = 0
//   console.log(arr1,arr2)
  while(i<=arr1.length-1 && j<=arr2.length-1){
    if(arr1[i] === arr2[j]){
        result.push(arr1[i])
        i++
        j++
    }else if(arr1[i]<arr2[j]){
        i++
    }else{
        j++
    }
  }
//   console.log(result)
return result
};