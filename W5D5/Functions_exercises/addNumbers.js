// "use strict";
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function absurdTimes(sum, numTimes, fnAsync, completionFn) {
  let i = 0;

  function loopStep(sum) {
    if (i == numTimes) {
      // we're done, stop looping
      // Completion function?
      // Print out total sum
      completionFn(sum);
      reader.close();
      return;
    }  

    i++;
    // recursively call loopStep
    // Asynchronous function?
    fnAsync(loopStep);
  }

  loopStep(sum);
}

function absurdAddNumbers(sum, numsLeft, completionCallback) {

  function getNumAndAddToSum(callback) {
    reader.question("Enter num: ", function (numString) {      
      const num = parseInt(numString);
      sum += num;
      console.log(sum);
      callback(sum);
    });
  }

  absurdTimes(sum, numsLeft, getNumAndAddToSum, completionCallback);
}

const completionFn = function (sum) { console.log(`Total Sum: ${sum}`); };
addNumbers(0, 3, completionFn);



function addNumbers(sum, numsLeft, completionFn) {

  reader.question("Enter num: ", function (numString) {
    const num = parseInt(numString);
    sum += num;
    console.log(sum);
    numsLeft--;
    if (numsLeft === 0) {
      completionFn(sum);
      reader.close();  
    } else {
      addNumbers(sum, numsLeft, completionFn);
    }
  });
}



