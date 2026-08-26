new Date().toLocaleString()
function logger(message) {

    console.log(`[\x1b[31m${new Date().toLocaleString()}] ${message}\x1b[0m`);
}
module.exports = logger;