//3 Write a function that adds a new property (publisher) to an object and updates an existing property (pages) with a new value?

function fn(){
    var book1={
        Name:"Playing It My Way",
        pages:65,
    }
    console.log(book1);
    
    book1.publisher="Hodder & Stoughton";
    book1.pages=68;
    console.log(book1)
}
fn();
