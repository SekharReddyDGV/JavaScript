var data1=[10,20,30,40,50,60]; //create an arrray
console.log(data1);

//access element in the array
var data2=[5,15,25,35,45];
var d1=data2[2];
console.log(d1);


//Add new element in the last position of array using PUSH();
data1.push(70);
console.log(data1);

//Add new element in the initial postion of array using Unshift();
 data1.unshift("Numbers:");
 console.log(data1);

 //Remove the last element in the Array using Pop();
 data1.pop();
 console.log(data1);

 //Remove the first element in the Array Using shift();
 data2.shift();
 console.log(data2);

 //check element is present in the array or not, using includes();
 var check=data1.includes(30); // write direct element in (),
 console.log(check);
 
//remove elements in the required position in the array by using splice(),
data1.splice(1,3);  //write  index number of removed starting element, removed elements count in paranthesis()
console.log(data1);

var data3=[100,110,120,130,140,150,160,170]
console.log(data3);

//Add element in required position in Array by using splice()
data3.splice(3,0,125,126,127,128,129,"Add elements"); // required index number,0,elements
console.log(data3);

//Remove Element and Add element in the same Position by using splice()
data3.splice(8,1,129.5,);
console.log(data3);
