const { Router } = require("express");
const { query } = require("../db/db-connection");
const contactRouter = Router();

contactRouter.post("/", async (req, res) => {
  console.log(req.body);
  const result = await query(
    "INSERT INTO CONTACT_FORMS (first_name, last_name, type, email, content) VALUES (?, ?, ?, ?, ?)",
    [
      req.body.firstName,
      req.body.lastName,
      req.body.type,
      req.body.email,
      req.body.content,
    ]
  );
  res.redirect("/thank-you.html");
});

module.exports = { contactRouter };
