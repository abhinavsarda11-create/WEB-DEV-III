const isEven = require("./modules/isEven");
const logger = require("./modules/logger");

logger(isEven(4)); 
logger(isEven(5));

logger("\x1b[32mApplication started\x1b[0m");