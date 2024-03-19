import express from "express";

const app = express();

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

app.get("/api/jokes", (req, res) => {
  const joke = [
    {
      id: 1,
      title: "a joke",
      content: "this is a joke",
    },
    {
      id: 2,
      title: "a joke",
      content: "this is a joke",
    },
    {
      id: 3,
      title: "a joke",
      content: "this is a joke",
    },
    {
      id: 4,
      title: "a joke",
      content: "this is a joke",
    },
    {
      id: 5,
      title: "a joke",
      content: "this is a joke",
    },
  ];
  res.send(joke);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
