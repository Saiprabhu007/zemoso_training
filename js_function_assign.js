
//this is the code related to function assignment which take another function as an argument
function square(number) {
    return number * number;
  }
  
  function cube(number) {
    return number * number * number;
  }
  
  function applyOperation(func, number) {
    return func(number);
  }
  
  console.log(applyOperation(square, 5)); 
  console.log(applyOperation(cube, 3)); 
  
