// var angle1 = document.querySelector(".angle1");
// var angle2 = document.querySelector(".angle2");
// var angle3 = document.querySelector(".angle3");
var angles = document.querySelectorAll(".angle");
var checkBtn = document.querySelector("#check-btn");
var output = document.querySelector(".output");

function checkAngles(){
    var sum = 0;
    for(var i=0; i<angles.length; i++){
        if(angles[i].value){
            console.log("aye")
            sum += Number(angles[i].value);
        } else {
            showMessage("Ooops!! You've not entered correct angle values!")
            return;
        }
    }
    
    if(sum === 180){
        showMessage("Yes!! These angles will form a triangle!")
    } else {
        showMessage("Oh no no!! These angles cannot be from a triangle!")
    }
}

function showMessage(message){
    output.innerText = message;
}

checkBtn.addEventListener("click", checkAngles);