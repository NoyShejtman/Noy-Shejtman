const { Router } = require("express");
const { query } = require("../db/db-connection");
const userRouter = Router();

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const result = await query(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password]
  );
  if (result.length === 0) {
    res.status(403).json(null);
    return;
  }
  const { age } = result[0];
  res.json({ email, age });
});

userRouter.post("/register", async (req, res) => {
  const { email, password, age } = req.body;
  console.log("req.body", req.body);

  try {
    const result = await query(
      "INSERT INTO users (email, password, age) VALUES (?, ?, ?)",
      [email, password, age]
    );
  } catch (err) {
    return res.send(err.message);
  }
  res.redirect("/");
});

userRouter.post("/delete", async (req, res) => {
  const { email } = req.body;
  console.log("delete user - req.body", req.body);

  try {
    const result = await query("DELETE FROM users WHERE email = ?", [email]);
  } catch (err) {
    return res.send(err.message);
  }
  res.redirect("/");
});

userRouter.post("/update-email", async (req, res) => {
  const { newEmail, oldEmail } = req.body;
  console.log("update email - req.body", req.body);

  try {
    const result = await query("UPDATE users SET email = ? WHERE email = ?", [
      newEmail,
      oldEmail,
    ]);
  } catch (err) {
    return res.send(err.message);
  }
  res.redirect("/");
});

module.exports = { userRouter };
