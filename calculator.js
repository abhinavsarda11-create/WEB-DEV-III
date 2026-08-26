function calc(method){
    if (method === "add") {
        return Number(process.argv[3]) + Number(process.argv[4]);
    }
    if (method === "subtract") {
        return Number(process.argv[3]) - Number(process.argv[4]);
    }
    if (method === "multiply") {
        return Number(process.argv[3]) * Number(process.argv[4]);
    }
    if (method === "divide") {
        if (Number(process.argv[4]) === 0) {
            return "\x1b[31mError: Division by zero is not allowed.\x1b[0m";
        }
        return Number(process.argv[3]) / Number(process.argv[4]);
    }
    if (method === "mod") {
        if (Number(process.argv[4]) === 0) {
            return "\x1b[31mError: Division by zero is not allowed.\x1b[0m";
        }
        return Number(process.argv[3]) % Number(process.argv[4]);
    }
    if (method === "power") {
        return Math.pow(Number(process.argv[3]), Number(process.argv[4]));
    }
}

console.log(`\x1b[32mresults: ${calc(process.argv[2])}\x1b[0m`);
