const { Router } = require("express");
const { query } = require("../db/db-connection");
const eventsRouter = Router();

eventsRouter.get("/", async (req, res) => {
  const result = await query("SELECT * FROM events");
  res.json(result);
});

eventsRouter.get("/locations", async (req, res) => {
  const result = await query("SELECT * FROM LOCATIONS");
  res.json(result);
});

eventsRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log("id", id);
  const result = await query("SELECT * FROM events WHERE id = ?", [id]);
  res.json(result[0]);
});

eventsRouter.post("/search", async (req, res) => {
  const { type, location, age } = req.body;
  console.log("req.body", req.body);

  const result = await query(
    "SELECT * FROM events WHERE type = ? AND cityId = ? AND over18 = ?",
    [type, Number(location), Number(age) >= 18]
  );

  if (result.length === 0) {
    return res.redirect("/search_no_results.html");
  }

  res.render("result_page", { events: result });
});

module.exports = { eventsRouter };
