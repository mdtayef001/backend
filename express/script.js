const express = require("express");
const app = express();
const port = 4000;

app.set("view engine", "ejs");
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/error", (req, res) => {
  throw new Error(`${req.ip}:${req.port}`);
});

app.get("/contact", (req, res) => {
  res.render("contact", { name: "tayef hossain nabil" });
});

// app.get("/profile", (req, res) => {
//   res.send("hello from profile");
// });
// app.get("/profile/:username", (req, res) => {
//   res.send(`hello from profile ${req.params.username}`);
// });

app.use(function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render("error", { error: err });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
