
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/check", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    const password = req.body["password"];
    if (password === "ILoveProgramming") {
        res.redirect("/secrets");
    } else {
        res.send("Wrong password");
    }
});

app.get("/secrets", (req, res) => {
    res.sendFile(__dirname + "/public/secret.html");
});

app.listen(port, ()=> {
    console.log(`Listening on port ${port}`);
});