const buttons = document.querySelectorAll("button");
let calculationNumbers = "";
const input = document.getElementById('inputBox')

for(let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener("click", (e) => {
        calculateResult(e);
    })
}

function calculateResult(e) {
    const btnClicked = e.target.innerText;

    if(btnClicked == "AC"){
        calculationNumbers = "";
        input.value = calculationNumbers;
    }
    
    else if(btnClicked == "DEL") {
        calculationNumbers = calculationNumbers.slice(0, -1);
        input.value = calculationNumbers;
    }

    else if(btnClicked == "=") {
        if(calculationNumbers == "")
            {
                input.value = "Error"
            }
        else {
            try {
                input.value = eval(calculationNumbers);
            }
            catch (e) {
                input.value = "Error";
            }
            
        }
    }

    else {
        calculationNumbers += btnClicked;
        input.value = calculationNumbers;
    }

}

