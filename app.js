
let weight = document.getElementById("weight");
let heightFt = document.getElementById("height-ft");
let heightIn = document.getElementById("height-in");
let button = document.getElementById("button")

let radioBtn = document.getElementsByClassName("radio-button")
console.log(radioBtn)

const form = document.querySelector('form');

function getBMI(weight, heightFt){
    let BMI = weight / heightFt;
    console.log(BMI)
    return BMI;
}
button.addEventListener('click', function(e){
    e.preventDefault();
    //code for BMI
    let totalHeight = heightFt.value + (".") + heightIn.value
    console.log(totalHeight);
    console.log("Hello")
    console.log(weight.value)
    console.log(heightFt.value)
    let BMI2 = weight.value / totalHeight;

    //Code for coffe intake
    for(let i = 0; i < radioBtn.length; i++){
        if(radioBtn.checked = 'true'){
            let dailyIntake = radioBtn[i].value;
            console.log(dailyIntake)
        }
        

    }
    console.log(BMI2);    
})

form.addEventListener("submit", (e) => {
    // e.preventDefault();
    console.log("SUBMIT")
})



