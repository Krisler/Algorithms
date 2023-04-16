/*Given an array of integers, return the indices of the two 
  numbers that add up to the given target.*/

/* Step 1: Verify the constraints (Inputs?, Ouputs?, Positive/Negative?, Duplicate numbers?, Always a solution?, Return if no solutions?, Multiple pairs add up to the value?)
   Step 2: Write out some test cases
            Best case: Input [1,3,7,9,2] t=11 , Output: [3,4]
            Input [1,3,7,9,2] t=25 , Output: null
            Input [] t=1 , Output: null
            Input [5] t=5 , Output: null
            Input [1,7] t=7 , Output: [0,1]

    Step 3: Figure out a solution without code
            nums = [1,3,7,9,2]   t=11
            numberToFind = target - nums[p1]
            return [p1,p2] => [3,4]
    
    Step 4: Write out our solution in code
    Step 5: Double check for errors
    Step 6: Test the solution using the test case
    Step 7: analyse space and time complexity
    Step 8: Can we optimize our solution?

    thernrnkeleorotp


*/

const array = [2, 7, 11, 15];
let target = 9;


const findToSum = function (array, target) {
    if (array.length > 1) {
        for (let p1 = 0; p1 < array.length; p1++) {
            let numberToFind = target - array[p1];

            for (let p2 = p1 + 1; p2 < array.length; p2++) {
                if (array[p2] === numberToFind) {
                    return [p1, p2];
                }
            }
        }
    }
    return null;
}

const findToSumIm = function (array, target) {
    const smap = new Map();

    for (let p1 = 0; p1 < array.length; p1++) {
        let currentMapVal = smap.get(array[p1]);

        if (currentMapVal >= 0) {
            return [currentMapVal, p1];
        } else {
            let numberToFind = target - array[p1];
            //Add values to hashmap key and value - array index
            smap.set(numberToFind, p1);
        }

    }

    return null;
}

console.log(findToSum(array, target));
console.log(findToSumIm(array, target));

//Space: O(1) and Time: O(n^2)
//Optimize by using HashMap - Space: O(n) and Time: O(n)