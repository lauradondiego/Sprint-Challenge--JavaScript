// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

const consume = function(a, b, callback)


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add(x, y, cb) {
  let adding = (x + y)
  cb(adding);
}
add(2, 6, (numbersAdded) => {
  console.log(numbersAdded);
});

function multiply(x, y, cb) {
  let multi = (x * y)
  cb(multi);
}
multiply(2, 6, (numbersMultiplied) => {
  console.log(numbersMultiplied);
});

function greeting(first, last, cb) {
}
  console.log(`Hello, ${.first}, ${.last}, nice to meet you!`);



/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 

// Because with closures, you can access inside functions from the outside


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