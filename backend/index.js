require("dotenv").config();
const cors = require("cors");
const express = require("express");

const app = express();
app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);
const port = parseInt(process.env.APP_PORT ?? "5001", 10);
const welcome = (req, res) => {
  res.send("Welcome");
};
app.get("/", welcome);
const takeItEasy = require("./TakeItEasy.jsx");

app.get("/marco", takeItEasy.GetMarco);
app.get("/esther", takeItEasy.GetEsther);
app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    // eslint-disable-next-line no-restricted-syntax
    console.log(`Server is listening on ${port}`);
  }
});
