// create a function & return object from it,whenever it is called.
function fn(){
    var Details={
        Name: "Sekhar",
        last_Name:"Reddy",
    };
    console.log(Details);
    console.log(Details.last_Name);
}
fn();


//create object and access specific value of object

var Product={
    Brand: "Activa",
    Model:"6G",
    Price:103000,
};
console.log(Product.Model);
//or
var bike=Product.Brand;
console.log(bike);

//insert new property in object.

var Product={
    Brand: "Activa",
    Model:"6G",
    Price:103000,
};

console.log(Product);
Product.color="Siral Blue";
console.log(Product);


//Delete property in object
var baskteball = {
    P1:"Lebron",
    Jersy:23,
    Team:"Lakers",

};
console.log(baskteball);

delete baskteball.Team;

console.log(baskteball);


//create funtion in object

var student={
    Name:"Kalyan",
    display:function f2(){
        console.log("Kumar");
    }
};
var S1= student.Name;
console.log(S1);
student.display();


//Update property in object

var baskteball = {
    P1:"Lebron",
    Jersy:23,
    Team:"Lakers",

};
console.log(baskteball);

baskteball.Jersy=6;
baskteball.Team="miami";

console.log(baskteball);