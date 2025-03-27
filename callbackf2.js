function Call(Name){
  Name();
    console.log();
};


Call(function Name(){
  console.log("My Name is");
});


function Task(){
    Name="Sekhar";
    console.log(Name);
}

Call(Task);

Call(function(){
   console.log("Reddy");
});



