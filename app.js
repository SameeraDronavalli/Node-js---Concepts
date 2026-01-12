
// Day-1: setup
// installed node js
// run  the terminal
console.log("hello, this is first node program")

// Day 2 : frontend and backend mindset
// Node.js runs JavaScript on the server
// Backend handles logic, not UI
console.log("Frontend handles UI");
console.log("Backend handles logic and data");

//Day-3 & Day 4: npm & Packages
//npm is a tool to download and manage libraries for Node.js.
//using npm installed package.json  => It has Project details + dependencies list
//Express allows us to easily create HTTP servers and define routes for handling client requests
const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.send("Here is the response for the request")
});
app.listen(3000,()=>{
    console.log("server started on port 3000")
})
