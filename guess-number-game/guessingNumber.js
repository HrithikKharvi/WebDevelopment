let maximumNumber = parseInt(prompt("Enter the maximum Number"));
while (!maximumNumber) {
    maximumNumber = parseInt(prompt("Enter maximum Number again!!!!"));
}
let targetNumber = Math.floor(Math.random() * maximumNumber) + 1;
let counter = 1;

let userInput = prompt("Enter your first guess!!!!");
console.log(userInput);
while (targetNumber !== parseInt(userInput)) {

    if (userInput.toString().toLowerCase() === "q") break;

    counter++;

    if (parseInt(userInput) < targetNumber) {
        userInput = prompt("Its too low");
    } else if (!parseInt(userInput)) {
        userInput = prompt("Enter the valid number");
    } else {
        userInput = prompt("Its too high");
    }
    console.log(userInput);

}

if (userInput.toLowerCase() === "q") {

    alert("OK! You QUIT!!!!")

} else {
    alert(`Congrats you got in ${counter} attempts`);
}









