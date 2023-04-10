#! usr/bin/env node
import { add, multiply, sub, div } from "./add.js";
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "num1",
        message: "Enter 1st number",
        type: "number"
    },
    {
        name: "num2",
        message: "Enter 2nd number",
        type: "number"
    },
    {
        name: "sign",
        message: "math sign?",
        type: "string"
    }
]);
if (answers.sign === "+") {
    const ans = add(answers.num1, answers.num2);
    console.log(ans);
}
if (answers.sign === "-") {
    const ans = sub(answers.num1, answers.num2);
    console.log(ans);
}
if (answers.sign === "*") {
    const ans = multiply(answers.num1, answers.num2);
    console.log(ans);
}
if (answers.sign === "/") {
    const ans = div(answers.num1, answers.num2);
    console.log(ans);
}
