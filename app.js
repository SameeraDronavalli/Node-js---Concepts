// Day-1: setup
console.log("hello, this is first node program");

// Day-2: frontend vs backend
console.log("Frontend handles UI");
console.log("Backend handles logic and data");

// Day-3 & Day-4: npm & Express
const express = require("express");
const app = express();

// Middleware for POST body
app.use(express.json());

// Day-4: Home route
app.get("/", (req, res) => {
  res.send("Home Page");
});

// Day-5: Multiple Routes
app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/login", (req, res) => {
  res.send("Login Page");
});

// Day-6: POST request
app.post("/login", (req, res) => {
  console.log(req.body);
  res.send("Login successful");
});

// Server start 
app.listen(3000, () => {
  console.log("Server started on port 3000");
});

//Day7 :req.query used for search or filter purpose
app.get("/search", (req, res) => {
  console.log(req.query);
  res.json(req.query);
});
//req.params mostly used for IDs
app.get("/user/:id", (req, res) => {
  console.log(req.params);
  res.send(`User ID is ${req.params.id}`);
});