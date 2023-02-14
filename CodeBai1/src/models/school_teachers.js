const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('school_teachers', {
    teacher_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    teacher_name: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    subject: {
      type: DataTypes.STRING(15),
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
    tableName: 'school_teachers',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "teacher_id" },
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
