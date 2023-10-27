'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Criminal_Records extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Criminal_Records.belongsTo(models.People, {
        foreignKey: "person_id"
      });
    }
  }
  Criminal_Records.init({
    record_id: DataTypes.INTEGER,
    crime: DataTypes.STRING,
    name: DataTypes.STRING,
    info: DataTypes.STRING,
    person_id: DataTypes.INTEGER,
    date: DataTypes.STRING,
    alias: DataTypes.STRING,
    weight: DataTypes.INTEGER,
    height: DataTypes.INTEGER,
    hair_color: DataTypes.STRING,
    eye_color: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Criminal_Records',
  });
  return Criminal_Records;
};