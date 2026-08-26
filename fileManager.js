const fs = require("fs");
fs.writeFile("test.txt", "Hello Sir", (err) => {
    if (err) console.log(err);
    else console.log("File Created");
});

fs.readFile("test.txt", "utf8", (err, res) => {
    if (err) console.log(err)
    else console.log(res)
});

fs.appendFile("test.txt", "\nLearning FS Module", (err) => {
    if (err) console.log(err)
    else console.log("File Updated")
});

// fs.unlink("test.txt", (err) => {
//     if (err) console.log(err)
//         else console.log("File Deleted Successfully")
// });