/**
 * Contains Duplicate
 * Dado un array de enteros, devuelve true si algún valor aparece
 * al menos dos veces, y false si todos son distintos.
 *
 * Complejidad temporal:
 * Complejidad espacial:
 */
function containsDuplicate(nums) {
    /* Fase A */

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
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));  // true