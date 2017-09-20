function stringsRearrangement(inputArray) {
    var numCases = inputArray.length;
    var allPermutations = permutator(inputArray);
    var status = false; 
    allPermutations.some(function(ele, i, arr) {
        var currentPermutation = ele;
        var currentStatus = true; 
        for (var i = 0; i < numCases - 1; i++) {
            if (!(compareStrings(currentPermutation[i], currentPermutation[i+1]))) {
                currentStatus = false; 
            }
        }
        if (currentStatus) {
            console.log(currentPermutation);
            status = currentStatus;
            return currentStatus; 
        }
    })
    return status; 

}

function compareStrings(string1, string2) {
    string1Split = string1.split("");
    var varianceCount = 0;

    string2.split("").forEach(function(ele, i, arr) {
        if (!(ele === string1Split[i])) {
            varianceCount++;
        }
    })

    return varianceCount === 1;
}

function permutator(inputArr) {
  var results = [];

  function permute(arr, memo) {
    var cur, memo = memo || [];

    for (var i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(memo.concat(cur));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }

    return results;
  }

  return permute(inputArr);
}

// function compareStrings(string1, string2) {
//     string1Dict = {};
//     string2Dict = {};
//     string1.split("").forEach(function(ele, i, arr) {
//         if (ele in string1Dict) {
//             string1Dict[ele]++;
//         } else {
//             string1Dict[ele] = 1;
//         }
//     })
//     string2.split("").forEach(function(ele, i, arr) {
//         if (ele in string1Dict) {
//             if (string1Dict[ele] > 0) {
//                 string1Dict[ele]--;
//             }
//         }
//     })
//     // console.log(string1Dict);
//     var varianceSum = 0;
//     for (key in string1Dict) {
//         varianceSum += string1Dict[key];
//     }
//     return varianceSum === 1;
// }

// console.log(permutator(["ab", "bb", "aa"]));

console.log(stringsRearrangement(["ab", "bb", "aa"]));