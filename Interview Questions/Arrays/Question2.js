/*
Question: You are given an arry of positive integers where each 
        integer reprsents the height of a vertical line on a chart. Find
        two lines which together with the x-axis forms a container that
        would hold the greatest amount of water. Return the area of water 
        it would hold.

Step 1: Verify Constraints
        Does the thickness of the lines affect the area? - No, assume the take up no
        space.

        Do the left and right sides of the graph count as walls? - No, the sides
        cannot be used to form a container.

        Can we pick two values if one value is higher in the middle?
        Yes, the value in the middle won't affect the container

Step 2: Write test cases
        Base case: Input = [7,1,2,3,9] Output = 7x4 = 28  4-0 = 4
        [] = 0
        [7] = 0
        [6,9,3,4,5,8]  1. 6x5=30, 2. 8x4=32 (correct)

Step 3: Logic Solution

[7,1,2,3,9]   area = lxw -> length is the less of the two values
              (a,b) 
              min(a,b) x (bi - ai)
              maxArea = 0

        1.    min(7,1) * (1-0)  = 1  Eg. 
                Compare with current maxArea 
                If it is greater would be maxArea = 1 
                
Step 4: Code Solution
*/

const array = [6, 9, 3, 4, 5, 8];

const maxAreaFun = function (array) {
        let maxArea = 0;
        if (array.length > 1) {
                for (let p0 = 0; p0 < array.length; p0++) {
                        for (let p1 = p0 + 1; p1 < array.length; p1++) {
                                const height = Math.min(array[p0], array[p1]);
                                if ((height * (p1 - p0)) > maxArea) {
                                        maxArea = height * (p1 - p0);
                                }
                        }
                }
                return maxArea;
        } else {
                return null;
        }

}

console.log(maxAreaFun(array));
