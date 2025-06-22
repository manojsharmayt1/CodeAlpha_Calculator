// Get the input box and all calculator buttons
let input = document.getElementById('inputbox')
let buttons = document.querySelectorAll('button')

let string = ""; // To store the current input string
let arr = Array.from(buttons);

// Add click event listener to each button
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        // If '=' is pressed, evaluate the expression
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        // If 'AC' is pressed, clear all input
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        // If 'CR' is pressed, remove the last character
        else if(e.target.innerHTML == 'CR'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        // If '%' is pressed, calculate percentage of the current value
        else if(e.target.innerHTML == '%'){
            if(string !== ""){
                string = (eval(string) / 100).toString();
                input.value = string;
            }
        }
        // For all other buttons, append their value to the input
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})