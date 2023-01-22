const express = require("express");
const app = express();
const port = 5000;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../src/views/ejs"));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { variableName: "Hello World!" });
});

app.listen(port, () => {
  console.log("Listening to port: ", port);
});
