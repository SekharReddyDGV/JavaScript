function fn(x){
    if(x>0 && x < 2){
        return "Junior Engineer";
    }
    else if (x>2 && x < 5){
        return "Senior engineer";
    }
    else if(x>5 && x < 7){
        return "Team Leader";
    }
    else if(x>7 && x < 9){
        return "Software Manager";
    }
    else if(x > 9){
        return "Project Manager";
    }
    else{
        return "Un-employed";
}
}

var result=fn(8);
console.log(result);