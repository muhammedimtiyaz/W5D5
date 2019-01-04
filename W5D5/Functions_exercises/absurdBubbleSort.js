"use strict";
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function absurdBubbleSort(array, sortCompletionCallback) {

  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps === true) {
      innerBubbleSortLoop(array, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(array);
    } 
  }
  outerBubbleSortLoop(true);
}

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} greater than ${el2}?`, function (answer) {
    if (answer === 'y') {
      callback(true);
    } else {
      callback(false);
    }
  });
}

function innerBubbleSortLoop (arr, i, madeAnySwaps, outerBubbleSortLoop) {
  //recursive func
  // debugger
  if (i < arr.length -1) {
    askIfGreaterThan(arr[i], arr[i+1], function (isGreaterThan) {
      if (isGreaterThan === true) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        madeAnySwaps = true;
      } else {
        madeAnySwaps = false;
      }
      innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
    });
  } else if (i === arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
  }
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});

// TEST ASKIFGREATER
// askIfGreaterThan(5,3, function (answer) {
//   if (answer === true) {
//     console.log('was greater');
//   } else {
//     console.log('was not greater');
//   }
//   reader.close();
// });

// innerBubbleSortLoop([3,5,1,6,2], 0, false, function () {
  //   console.log("In outer bubble sort loop");
// });