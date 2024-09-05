const input = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');
let calculation = "";

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        const userInput = e.currentTarget.innerText;

        if(userInput == "AC") {
            calculation = "";
            input.value = calculation;
        }
        else if(userInput == "DEL") {
            calculation = calculation.slice(0, -1);
            input.value = calculation;
        }

        else if(userInput == "=") {
            if(calculation != ""){
                let calculatedValue = eval(calculation);
                input.value = calculatedValue;
            }
            
        }

        else {
            if((calculation[calculation.length-1] === "/" || "*" || "-" || "+" || "%") && calculation.length > 0) {
                
            }
            else {
                calculation += userInput;
                input.value = calculation;    
            }
            }
    });
})

//caculation = "5+";
