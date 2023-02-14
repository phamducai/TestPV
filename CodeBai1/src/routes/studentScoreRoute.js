const express = require("express");
const ScoreRoute = express.Router();

const {
  getStudentScore,
  updateScore,
} = require("../controller/student_score.controller");
ScoreRoute.get("/getStudentScore", getStudentScore);
ScoreRoute.put("/updateScore/:studentid", updateScore);
module.exports = ScoreRoute;
