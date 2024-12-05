const selectMenu = document.querySelector("#colors");
const btnGetResult = document.querySelector("button");
const resultArea = document.querySelector(".result");
const resultContainer = document.querySelector(".result-container");

btnGetResult.addEventListener("click" , () => {

    const userChoice = selectMenu.options[selectMenu.selectedIndex].value;
    let resultText = "";

    switch(userChoice) {
        case "red":
            resultText = "You seek power and control.";
            break;
        case "green":
            resultText = "you are a natural visionary, non-conformist, and problem-solver kind of individual.";
            break;
        case "yellow":
            resultText = "you are an optimistic, fun-loving, cheery, creative kind of individual.";
            break;
        case "black":
            resultText = "you are a strong-willed, determined, confident, independent, risk-taker kind of individual.";
            break;
        case "pink":
            resultText = "you are a playful, fun, easy-going, smart, genuine child-like, social butterfly kind of individual.";
            break;
        case "blue":
            resultText = "you look for meaning and significance in life.";
            break;
        default:
            resultText = "you are an unknown person";
            break;  
    }
    

    if(userChoice === "other") {
        resultContainer.style.backgroundColor = "#777";
    } else {
        resultContainer.style.backgroundColor = userChoice;
    }

    resultArea.innerHTML =  resultText;

});



// if(userChoice === "red") {
//     resultText = "You seek power and control.";
// } else if (userChoice === "green") {
//     resultText = "you are a natural visionary, non-conformist, and problem-solver kind of individual.";
// } else if (userChoice === "yellow") {
//     resultText = "you are an optimistic, fun-loving, cheery, creative kind of individual.";
// } else if (userChoice === "black") {
//     resultText = "you are a strong-willed, determined, confident, independent, risk-taker kind of individual.";
// } else if (userChoice === "pink") {
//     resultText = "you are a playful, fun, easy-going, smart, genuine child-like, social butterfly kind of individual.";
// } else if (userChoice === "blue") {
//     resultText = "you look for meaning and significance in life.";
// } else {
//     resultText = "you are an unknown person";
// }