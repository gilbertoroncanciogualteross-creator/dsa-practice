
// 217. Contains Duplicate
//
// Given an array of integers, return true if any value appears
// at least twice, and false if every element is distinct.
//
// Example 1: [1, 2, 3, 1] -> true
// Example 2: [1, 2, 3, 4] -> false
//
// Phase A (brute force, two nested loops): Time O(n2) | Space O(1)
// Phase B (Set, single pass):              Time O(n) | Space O(n)

function containsDuplicate(nums) {

    // Phase A

    /*
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] === nums[j]){
                return true;
            }
        }
    }
    return false;
}
    */

    // Phase B

    const s = new Set();

    for(let i = 0; i < nums.length; i++){
        if(s.has(nums[i])){
            return true;
        }
        s.add(nums[i]);
    }
    return false;
}

console.log(containsDuplicate([1, 2, 3, 1]));                    // true
console.log(containsDuplicate([1, 2, 3, 4]));                    // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 3]));  // true