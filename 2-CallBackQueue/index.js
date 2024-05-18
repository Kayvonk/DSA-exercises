// Stack
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.push("newEl")

console.log(arr);

arr.pop()

console.log(arr);

// Queue

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr2.push("AddToEnd")

console.log(arr2);

arr2.shift()

console.log(arr2);

// Callstack and callback Queue

function myTimer() {
    setTimeout(() => {
      console.log("setTimout");
    }, 0);
  console.log("Timer function");
}

myTimer()