/* 
# A child is running up the staircase with n steps and can hop with 1 step or 2 steps at a time.
# Implement a method to print all possible ways the child can climb the stairs.
#
# Input: 2
# Output:
#  '1 + 1'
#  '2'
#
# Input: 3
# Output:
#  '1 + 1 + 1'
#  '1 + 2'
#  '2 + 1'
#

def stepsLog(n, stepsTaken)
    if (n == 0)
      # Print all elements in the stepsTaken Array for this possible route
      puts stepsTaken.join(' + ') #e.g. [1,1] => '1 + 1'
    end

    #### TODO
end

#stepsLog(2, [])
#stepsLog(3, [])
 */

function stepsLog(numSteps, stepsTakenArr) {
    if (numSteps === 0) {
        console.log(stepsTakenArr.join(" + "));
    } else {
        let newStepsArr;
        if (numSteps >= 1) {
            newStepsArr = stepsTakenArr.slice();
            newStepsArr.push(1);
            stepsLog(numSteps - 1, newStepsArr);
        }
        if (numSteps >= 2) {
            newStepsArr = stepsTakenArr.slice();
            newStepsArr.push(2);
            stepsLog(numSteps - 2, newStepsArr);
        }
    }

}

// stepsLog(1, []);
stepsLog(4, []);