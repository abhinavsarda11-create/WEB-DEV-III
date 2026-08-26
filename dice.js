const crypto = require("crypto");
const fs = require("fs");

function rollSingleDice() {
  return crypto.randomInt(1, 7);
}

console.log("Single Dice Rolled:", rollSingleDice());

function rollDice() {
    let logContent = "";

    for (let i = 1; i <= 5; i++) {
    const result = rollSingleDice();
    const line = `Roll ${i}: ${result}\n`;

    console.log(`Dice Rolled: ${result}`);
    logContent += line;
    } 


    fs.appendFileSync("dice_history.txt", logContent);
}

console.log("\nRolling Dice 5 times...");
rollDice();

