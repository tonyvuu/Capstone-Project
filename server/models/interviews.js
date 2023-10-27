'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Interviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Interviews.belongsTo(models.People, {
        foreignKey: "person_id"
      });
      Interviews.belongsTo(models.Police_Reports, {
        foreignKey: "report_id"
      });
    }
  }
  Interviews.init({
    interview_id: DataTypes.INTEGER,
    person_id: DataTypes.INTEGER,
    report_id: DataTypes.INTEGER,
    info: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Interviews',
  });
  return Interviews;
};