const express = require("express");
const SequelizeAuto = require("sequelize-auto");

const app = express();

// const auto = new SequelizeAuto("SCHOOL_MANAGEMENT", "root", "1234", {
//   host: "localhost",
//   dialect: "mysql",
//   directory: "./src/models",
//   port: "3306",
// });
// auto.run(function (err) {
//   if (err) throw err;
//   console.log(auto.tables); // table list
//   console.log(auto.foreignKeys); // foreign key list
// });
const studentScore = require("./routes/studentScoreRoute");
app.use("/api", studentScore);
app.listen(8080, () => console.log("success"));
