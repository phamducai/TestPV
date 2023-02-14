var DataTypes = require("sequelize").DataTypes;
var _SCHOOL = require("./SCHOOL");
var _school_students = require("./school_students");
var _school_teachers = require("./school_teachers");
var _student_scores = require("./student_scores");

function initModels(sequelize) {
  var SCHOOL = _SCHOOL(sequelize, DataTypes);
  var school_students = _school_students(sequelize, DataTypes);
  var school_teachers = _school_teachers(sequelize, DataTypes);
  var student_scores = _student_scores(sequelize, DataTypes);

  school_students.belongsTo(SCHOOL, { as: "school", foreignKey: "school_id"});
  SCHOOL.hasMany(school_students, { as: "school_students", foreignKey: "school_id"});
  school_teachers.belongsTo(SCHOOL, { as: "school", foreignKey: "school_id"});
  SCHOOL.hasMany(school_teachers, { as: "school_teachers", foreignKey: "school_id"});
  student_scores.belongsTo(school_students, { as: "student", foreignKey: "student_id"});
  school_students.hasMany(student_scores, { as: "student_scores", foreignKey: "student_id"});
  student_scores.belongsTo(school_teachers, { as: "teacher", foreignKey: "teacher_id"});
  school_teachers.hasMany(student_scores, { as: "student_scores", foreignKey: "teacher_id"});

  return {
    SCHOOL,
    school_students,
    school_teachers,
    student_scores,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
