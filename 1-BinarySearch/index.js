let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Given the array provided above, write function that will search for a given element using a binary search algorithm

// An example of cubic time complexity

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);

  for (let j = 0; j < arr.length; j++) {
    console.log(arr[j]);

    for (let k = 0; k < arr.length; k++) {
      console.log(arr[k]);
    }
  }
}

// An example of quadratic time complexity

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);

  for (let j = 0; j < arr.length; j++) {
    console.log(arr[j]);
  }
}
