const fs = require("fs");
// fs.writeFile("message.txt", "hello from Node.js", (err) => {
//     if (err) throw err;
//     console.log("File created");
// });

fs.appendFile("message.txt", "\nSanjay Here", (err) => {
    if (err) throw err;
    console.log("File updated");
});

fs.readFile("message.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});