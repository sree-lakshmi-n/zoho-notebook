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

app.get("/signup", (req, res) => {
  const signup = {
    formClass: "signup",
    descClass: "signin",
    descContent: "Already a member?",
    linkContent: "Sign in",
    ctaContent: "Sign up",
  };
  res.render("partials/form", { formType: signup });
});

app.get("/signin", (req, res) => {
  const signup = {
    formClass: "signin",
    descClass: "signup",
    descContent: "New to NoteIt ?",
    linkContent: "Sign up",
    ctaContent: "Sign in",
  };
  res.render("partials/form", { formType: signup });
});

app.listen(port, () => {
  console.log("Listening to port: ", port);
});
