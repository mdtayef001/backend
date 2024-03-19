const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/profile", (req, res) => {
  res.send("hello from profile");
});
app.get("/profile/:username", (req, res) => {
  res.send(`hello from profile ${req.params.username}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
