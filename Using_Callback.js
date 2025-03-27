//create arrow function using function expression.

var data=(x,y)=>{
    
    return (x+y);
}
 var Value=data(10,20);
 console.log(Value);
   

 //using call back function

 function f1(){
    var city1="Hyderabad";
    console.log(city1);
 }

 function f2(){
    var city2="Chennai";
    console.log(city2);
 }

 function cities(x,y){
    console.log(x,y);
    x();
    y();
 }
 cities(f1,f2);

 cities(function f3(){
    var city3="Delhi";
    console.log(city3);
 },function f4(){
    var city4="Kochi";
    console.log(city4);
 });