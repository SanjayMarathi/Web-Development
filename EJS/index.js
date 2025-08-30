import express from 'express';
import bodyParser from 'body-parser';
import {dirname} from 'path';
import {fileURLToPath} from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");


app.use(bodyParser.urlencoded({ extended: true }));

app.get('/submit', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});
app.post('/submit', (req, res) => {
    const day = req.body.day;

    let advice = "";
    let dayType = "";

    if (day.toLowerCase() === "saturday" || day.toLowerCase() === "sunday") {
        dayType = "weekend";
        advice = "relax and enjoy";
    } else {
        dayType = "weekday";
        advice = "stay productive";
    }

    res.render("index", { dayType, advice });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
