const logger = (req, res, next) => {
    console.log("----- Incoming Request -----");
    console.log("Method:", req.method);
    console.log("URL:", req.originalUrl);
    console.log("Headers:", req.headers);
    console.log("Time:", new Date().toISOString());
    console.log("----------------------------");

    next();
};

module.exports = logger;