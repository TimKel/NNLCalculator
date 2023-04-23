
let weight = document.getElementById("weight");
let heightFt = document.getElementById("height-ft");
let heightIn = document.getElementById("height-in");
let submit = document.getElementById("submit")

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
            
            console.log(dailyIntake)

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

    BMI = Math.floor(weight.value / heightSquared * 703) + '%';
    console.log(BMI);
    return BMI;
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(e)
    // for(let i = 0; i < maleBodyType.length; i++){
        
    //     if(maleBodyType[i].clicked){
        
    //     console.log("BODY TYPES", maleBodyType[i].value);
    //     break;
    //     }
    
    // }

    //CORRECT CODE FOR BODY TYPE
    // for(let i = 0; i < maleBodyTypeRadio.length; i++){
    //     if(maleBodyTypeRadio[i].checked){
    //         bodyTypeSelection = maleBodyTypeRadio[i].value;
    //         console.log(bodyTypeSelection);
    //         break;
    //     }
    // }
    

    // for(let i = 0; i < maleBodyType.length; i++){
    //     maleBodyType[i].addEventListener('click', (e) => {
    //         e.preventDefault();
    //         maleBodyTypeRadio[i].checked = true;
    //         console.log("CHECKED", maleBodyTypeRadio[i].value)
    //     });
    // }
    

    getBMI();
    // bodyTypeRadio();
    coffeeIntake();
    getBodyType();

    alert(`Your BMI is ${BMI} and body is ${bodyTypeSelection}. Intake is ${dailyIntake}`)
});
