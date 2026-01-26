const users = require("../data/users");

// GET all users
exports.getUsers = (req, res) => {
  res.json(users);
};

// CREATE user
exports.createUser = (req, res) => {
  users.push(req.body);
  res.send("User added successfully");
};

// UPDATE user
exports.updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    return res.status(404).send("User not found");
  }

  users[index] = { ...users[index], ...req.body };
  res.send("User updated successfully");
};

// DELETE user
exports.deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  const filtered = users.filter(u => u.id !== id);

  users.length = 0;
  users.push(...filtered);

  res.send("User deleted successfully");
};
