// 1480. Running Sum of 1d Array
//
// Given an array `nums`, return a new array where each position i
// holds the sum of all numbers from index 0 up to index i.
//
// Example 1: [1, 2, 3, 4]     -> [1, 3, 6, 10]
// Example 2: [1, 1, 1, 1, 1]  -> [1, 2, 3, 4, 5]
// Example 3: [3, 1, 2, 10, 1] -> [3, 4, 6, 16, 17]
//
// Phase A (brute force): Time O(n2) | Space O(n)
// Phase B (optimized):   Time O(n) | Space O(n)
 
function runningSum(nums) {

    const nums2 = [];
    let sum = 0;

    // Phase A

    /*
    for(let i=0; i<nums.length; i++){
        sum = 0;
        for(let j=0; j<=i; j++){
            sum += nums[j];
            nums2[i] = sum;
        }
    }
    return nums2;
    */

    // Phase B
    
    for(let i=0; i<nums.length; i++){
        sum += nums[i];
        nums2[i] = sum;
    }
    return nums2;
}

console.log(runningSum([1, 2, 3, 4]));     // expected [1, 3, 6, 10]
console.log(runningSum([3, 1, 2, 10, 1])); // expected [3, 4, 6, 16, 17]