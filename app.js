// Day-1: setup
console.log("hello, this is first node program");

// Day-2: frontend vs backend
console.log("Frontend handles UI");
console.log("Backend handles logic and data");

// Day-3 & Day-4: npm & Express (Importing express package and)
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

// Day-8: API route
app.get("/api/user",(req,res)=>{
  res.json({
    name:"SAMEERA",
    role:"FULLSTACK DEVELOPER"
  })
})



// CRUD means: GET & POST Methods
//Letter 	Meaning	  HTTP Method
// C	    Create	    POST
// R	     Read	      GET
// U	    Update	    PUT
// D	    Delete 	    DELETE
let users = [
  { id: 1, name: "Sameera", role: "Frontend" },
  { id: 2, name: "Swapna", role: "Backend" }
];
app.get("/users",(req,res)=>{
  res.json(users)
})
app.post("/users",(req,res)=>{
  const newUser = req.body;
  users.push(newUser)
  res.send("new user added")
  console.log(users)
})


//day 9: PUT & DELETE Methods
app.put("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedData = req.body;

  const userIndex = users.findIndex(u => u.id === userId);

  if (userIndex === -1) {
    return res.status(404).send("User not found");
  }

  users[userIndex] = { ...users[userIndex], ...updatedData };

  res.send("User updated successfully");
  console.log(users);

});
// Server listens on port 3000 
app.listen(3000, () => {
  console.log("Server started on port 3000");
});

//day 10
// Day-10: DELETE Method
app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);

  users = users.filter(u => u.id !== userId);

  res.send("User deleted successfully");
  console.log(users);
});
