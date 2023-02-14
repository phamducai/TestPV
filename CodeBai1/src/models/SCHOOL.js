const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SCHOOL', {
    school_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    school_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    level_school: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    principal: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "principal"
    },
    number_of_school_year: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SCHOOL',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "school_id" },
        ]
      },
      {
        name: "principal",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "principal" },
        ]
      },
    ]
  });
};
