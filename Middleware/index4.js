import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import {fileURLToPath} from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true}));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
let s = "";
let p = "";
app.post("/submit", (req, res) => {
  s = req.body["street"];
  p = req.body["pet"];
  res.redirect("/result");
});
app.get("/result", (req, res) => {
  res.send(`Your Band name is ....\n${s}${p}`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
