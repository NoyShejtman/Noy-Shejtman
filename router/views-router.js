const { Router } = require("express");
const { query } = require("../db/db-connection");
const viewRouter = Router();

viewRouter.get("/search_page", async (req, res) => {
  const locations = await query("SELECT * FROM LOCATIONS");
  res.render("search_page", { locations });
});

viewRouter.get("/result_page", async (req, res) => {
  res.render("search_page", { locations });
});

module.exports = { viewRouter };
