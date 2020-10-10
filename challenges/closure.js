// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation:  nestedFunction can access the internal variable because it is within block scope. Anything outside of the nested function it can grab but not vice versa. So it can reach out to internal, but if we put the const inside of the nested function is would not be accessable to something above the nested function. TL;DR: You can reach out, but not in.


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
summation = (num) => {
  const count = []
    for (let i = 0; i <= num; i++) {
      count.push(i)    
  }
  const total = count.reduce((acc, cur) => acc +cur);
  return total;
  }
  summation(10)