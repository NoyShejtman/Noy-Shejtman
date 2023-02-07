const express = require("express");
const { contactRouter } = require("./router/contact-router");
const { eventsRouter } = require("./router/events-router");
const { tableRouter } = require("./router/tables-router");
const { userRouter } = require("./router/user-router");
const { viewRouter } = require("./router/views-router");

const app = express();
app.set("view engine", "pug");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("views"));
app.use(express.static("static"));

app.use("/", viewRouter);
app.use("/table", tableRouter);
app.use("/users", userRouter);
app.use("/events", eventsRouter);
app.use("/contact", contactRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
