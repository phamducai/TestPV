const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "student_scores",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      subject_title: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      test_score_15: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      test_score_45: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      test_score_semester: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      teacher_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "school_teachers",
          key: "teacher_id",
        },
      },
      student_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "school_students",
          key: "student_id",
        },
      },
    },
    {
      sequelize,
      tableName: "student_scores",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
        {
          name: "teacher_id",
          using: "BTREE",
          fields: [{ name: "teacher_id" }],
        },
        {
          name: "student_id",
          using: "BTREE",
          fields: [{ name: "student_id" }],
        },
      ],
    }
  );
};
