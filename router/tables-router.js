const { query } = require("../db/db-connection");
const { readFileSync } = require("fs");
const { Router } = require("express");

const tableRouter = Router();
tableRouter.get("/createDB", async (req, res) => {
  const createDbQuery = readFileSync("./create-db.sql", "utf8")
    .replace(/\r/g, "")
    .replace(/\n/g, "")
    .split(";")
    .forEach(async (queryRow) => {
      if (queryRow.trim()) {
        try {
          await query(queryRow);
        } catch (err) {
          console.log(queryRow);
          console.log(err);
        }
      }
    });

  res.json({ message: "DB created!" });
});

tableRouter.get("/events", async (req, res) => {
  const result = await query("SELECT * FROM events");

  let html =
    "<body><table><tr><th>Association</th><th>Event Date</th><th>Event Description</th><th>city_id</th><th>over18</th></tr>";
  for (const event of result) {
    console.log(Boolean(event.over18));
    const buffer = Buffer.from(event.over18);
    const over18 = Boolean(buffer.readInt8());
    html += `<tr><td>${event.association}</td><td>${event.date} - ${event.hours}</td><td>${event.description}</td><td>${event.cityId}</td>
      <td>${over18}</td>
    </tr>`;
  }
  html += "</table></body>";

  res.send(html);
});
tableRouter.get("/locations", async (req, res) => {
  const result = await query("SELECT * FROM locations");
  res.json(result);
});
tableRouter.get("/contact_forms", async (req, res) => {
  const result = await query("SELECT * FROM contact_forms");
  res.json(result);
});
tableRouter.get("/users", async (req, res) => {
  const result = await query("SELECT * FROM users");
  res.json(result);
});

tableRouter.get("/locations/delete", async (req, res) => {
  const result = await query("DELETE FROM locations");
  res.json({ message: "Deleted successfully", result });
});
tableRouter.get("/contact_forms/delete", async (req, res) => {
  const result = await query("DELETE FROM contact_forms");
  res.json({ message: "Deleted successfully", result });
});
tableRouter.get("/events/delete", async (req, res) => {
  const result = await query("DELETE FROM events");
  res.json({ message: "Deleted successfully", result });
});
tableRouter.get("/users/delete", async (req, res) => {
  const result = await query("DELETE FROM users");
  res.json({ message: "Deleted successfully", result });
});

module.exports = { tableRouter };
