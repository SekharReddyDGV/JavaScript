// 2. Write a function that takes an object and a property name as arguments and returns the value of that property? 
function getPropertyValue(obj, property) {
    return obj[property];
  }
  const person = {
    name: "Raj",
    age: 25,
    city: "New York"
  };
  
  const Name = getPropertyValue(person, "name");
  console.log(Name); 