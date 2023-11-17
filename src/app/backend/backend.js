const express = require("express");
const app = express();

app.use(express.json()); // Add parentheses here

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/signup/api", (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  res.send("Received POST request"); // You might want to send a response back to the client
});

app.listen(3000, () => {
  console.log("Server listening at port 3000.");
});
