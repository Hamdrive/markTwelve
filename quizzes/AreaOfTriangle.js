var baseValue = document.querySelector(".base-input");
var heightValue = document.querySelector(".height-input");
var areaBtn = document.querySelector("#area-btn");
var output = document.querySelector(".area-output");

function calculateArea(base, height){
    const area = 0.5 * base * height;
    return area;
}

function getValues(){
    const base = baseValue.value;
    const height = heightValue.value;
    
    if( base && height){
        const area = calculateArea(base, height);
        showMessage(`The triangle's area is: ${area} cm²`);
    } else {
        showMessage("Error!! Enter a value in both fields to calculate")
    }

}

function showMessage(message){
    output.innerText = message;
}

areaBtn.addEventListener("click", getValues);