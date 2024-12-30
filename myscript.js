let count = 0;

function hello1(){
    document.getElementById("theCount").innerHTML = ("You can count to " + count + ". Good job." + "<br>");
    count += 1;
    if (count == 100){
        alert("You are so good at counting! Keep it up!");
    if (count == 1000){
        alert("You can't stop counting now! You're doing too good!");
    }
    }
}


    
    
