function f1(){
    console.log("f1 is called");
}

function add(y){
    y();

}
add(f1);

add(function f3(){
    console.log("f3 is called");
});
add(function(){
    console.log("HYD");

});  

function f4(x){
    x();
}
 f4(f1);

