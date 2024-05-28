const display = document.getElementById("display");
let buttons = document.querySelectorAll(".err");
let activeKey = document.querySelector(".activate");

//this code helps to make sure when we press a button the value is displayed on calculator
function appendToDisplay(input){
    display.value += input;
    display.value = display.value;
}

//this code helps to make sure when we click the "Ac" button, all the values on the calculator is cleared
function allClear(){
    display.value = "";
}

//this code helps to delete a value from the end of the values displayed on the calculator when the "DE" button is clicked
function deleted(){
    display.value = display.value.toString().slice(0, -1)
}

/*this code helps to carry out the equation when the "=" key is clicked,
also helps to catch any error in the case where a invalid equation is carried out
and disables the keys on the calculator and enables it when the "AC" button is clicked

*/
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(err){
        display.value = "Error";
        if(display.value == "Error"){
            buttons.forEach( button => {
                button.disabled = true;
            })
        }

        activeKey.addEventListener('click', ()=>{
            buttons.forEach(button =>{
                button.disabled = false;
            })
        })
    }
}

// function displayEquation(){
//     display.value = eval(display.value);
    
// }

