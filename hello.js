const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser());    //middleware

app.get("/", (req, res) => {
  
  res.cookie("user", "Shriprada");

  res.send("Cookie set successfully!");
});

app.get("/shri", (req, res) => {
  // Read the value of the 'user' cookie
  const username = req.cookies.user ;

  res.send(`Hello, ${username}!`);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
