
let weight = document.getElementById("weight");
let heightFt = document.getElementById("height-ft");
let heightIn = document.getElementById("height-in");
let submit = document.getElementById("submit")
let baseDose = 150;

const form = document.querySelector('form');

let maleBodyType = document.getElementsByClassName("body-type-image");
let maleBodyTypeRadio = document.getElementsByClassName("body-type-radio");

//causing an issue with auto submit after changing listener to load
function removeImageEventOnClick(){
    for(let i = 0; i < maleBodyType.length; i++){
        maleBodyType[i].addEventListener('load', function(e){
            e.preventDefault();
            console.log("BODY TYPE", maleBodyType[i].value);
        })
    }
}

removeImageEventOnClick();


let radioBtn = document.getElementsByClassName("radio-button")

let dailyIntake; 

function coffeeIntake(){
    for(let i = 0; i < radioBtn.length; i++){
        if(radioBtn[i].checked){
            dailyIntake = radioBtn[i].value;
            
            // console.log(dailyIntake)
            return dailyIntake;

            break;
        }
    }  
}

let bodyTypeSelection;

function getBodyType(){
    for(let i = 0; i < maleBodyTypeRadio.length; i++){
        if(maleBodyTypeRadio[i].checked){
            bodyTypeSelection = maleBodyTypeRadio[i].value;
            console.log(bodyTypeSelection);
            return bodyTypeSelection
            break;
        }
    }
    

    for(let i = 0; i < maleBodyType.length; i++){
        maleBodyType[i].addEventListener('click', (e) => {
            e.preventDefault();
            maleBodyTypeRadio[i].checked = true;
            console.log("CHECKED", maleBodyTypeRadio[i].value)
        });
    }
}

let BMI; 

function getBMI(){
    let totalHeight = Number((heightFt.value * 12)) + Number(heightIn.value)
    let heightSquared = totalHeight ** 2;

    BMI = Math.floor(weight.value / heightSquared * 703);
    console.log(BMI);
    return BMI;
}

function ectomorphStart(BMI, bodyType, coffeeIntake){
    // console.log("BMIIII", BMI)
    // console.log("BMIIII", bodyTypeSelection)
    // console.log("BMIIII", dailyIntake)

    if( BMI < 26.5 && bodyType == "ectomorph" && coffeeIntake == "1 cup a week or less" ){
        // console.log(BMI, bodyTypeSelection, dailyIntake)
        console.log("BMIIII", BMI)
        console.log("BMIIII", bodyTypeSelection)
        console.log("BMIIII", dailyIntake)
        return (BMI, bodyType, coffeeIntake);
    }
    return 0
}
let profile;

function checkType(profile){

}

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(e)
    
    let BMIValue = getBMI();
    let dailyIntakeValue = coffeeIntake();
    let bodyTypeValue = getBodyType();
    console.log("BMIVALUE", BMIValue)
    console.log("BMIVALUE", dailyIntakeValue)
    console.log("BMIVALUE", bodyTypeValue)

    let ectomorphStartValue = ectomorphStart(BMIValue, bodyTypeValue, dailyIntakeValue);
    return (ectomorphStartValue, BMIValue, dailyIntakeValue, bodyTypeValue)

    // function checkProfile(profile){
    //     return profile ? 1 : "FuCk YeA"
    // }
    // checkProfile();
    // let intake = `${dailyIntake}`
    // let bmi = `${BMI}`
    // console.log("BMIIII", BMI)
    // switch(intake, BMI) {
    //     case "5 cups or more daily" && BMI <= 20:
    //         console.log("super high");
    //         break;
    //     case "3-4 cups daily":
    //         console.log("kinda high");
    //         break;
    // }
    if(BMI >= 26.5) baseDose += 25;

    // if(  dailyIntake === "1 cup a week or less" || dailyIntake === "1 cup daily" && bodyTypeSelection === "ectomorph"){
    //     console.log(`1 Your BMI is ${BMI}%. We suggest ${baseDose}mg.`) //150mg
    // }else if( dailyIntake === "1 cup daily" && bodyTypeSelection === "mesomorph" || "endomorph"){
    //     console.log(`2 Your BMI is ${BMI}%. We suggest ${(baseDose + 25)}mg.`) //175mg
    // }else if( dailyIntake === "2 cups daily" && bodyTypeSelection === "ectomorph" || "mesomorph"){
    //     console.log(`3 Your BMI is ${BMI}%. We suggest ${(baseDose + 25)}mg.`) //175mg
    // }else if( dailyIntake === "2 cups daily" && bodyTypeSelection === "endomorph" || dailyIntake === "3-4 cups daily" && bodyTypeSelection === "ectomorph" || "endomorph"){
    //     console.log(`4 Your BMI is ${BMI}%. We suggest ${(baseDose + 50)}mg.`) //200mg
    // }

    
    console.log("INTAKE", dailyIntake)
    console.log("BODYTYPEEE", bodyTypeSelection)
    alert(`Your BMI is ${BMI}% and body is ${bodyTypeSelection}. Intake is ${dailyIntake}`)
});


