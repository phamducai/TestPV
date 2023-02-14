const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('school_students', {
    student_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    student_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    class: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    school_year: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    school_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'SCHOOL',
        key: 'school_id'
      }
    }
  }, {
    sequelize,
    tableName: 'school_students',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "student_id" },
        ]
      },
      {
        name: "school_id",
        using: "BTREE",
        fields: [
          { name: "school_id" },
        ]
      },
    ]
  });
};
