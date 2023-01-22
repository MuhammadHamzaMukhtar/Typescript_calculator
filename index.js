import inquirer from "inquirer";
// welcome user
function welcomeMsg(msg) {
    console.log(msg);
}
let again = true;
async function getUserInput() {
    const answers = await inquirer.prompt([
        {
            name: "firstNumber",
            message: "Enter your first number",
            type: "input",
            validate: function (input) {
                if (isNaN(input)) {
                    return "Not a valid Input";
                }
                else {
                    return true;
                }
            },
        },
        {
            name: "operation",
            message: "Select Operator",
            type: 'list',
            choices: ['+', '-', '/', 'x', '%']
        },
        {
            name: "secondNumber",
            message: "Enter your second number",
            type: "input",
            validate: function (input) {
                if (isNaN(input)) {
                    return "Not a valid Input";
                }
                else {
                    return true;
                }
            },
        },
    ]);
    const firstNumber = Number(answers.firstNumber);
    const secondNumber = Number(answers.secondNumber);
    switch (answers.operation) {
        case "+":
            console.log(`Result: ${firstNumber + secondNumber}`);
            break;
        case "-":
            console.log(`Result: ${firstNumber - secondNumber}`);
            break;
        case "/":
            console.log(`Result: ${firstNumber / secondNumber}`);
            break;
        case "x":
            console.log(`Result: ${firstNumber * secondNumber}`);
            break;
        case "**":
            console.log(`Result: ${firstNumber ** secondNumber}`);
            break;
        case "%":
            console.log(`Result: ${firstNumber % secondNumber}`);
            break;
        default:
            break;
    }
    const { confirm } = await inquirer.prompt([
        {
            name: "confirm",
            message: "Do you want to do another calculation?",
            type: "confirm",
        }
    ]);
    again = confirm;
    console.log("\n\n");
}
welcomeMsg("Welcome to Hamza's Calculator!");
do {
    await getUserInput();
} while (again);
