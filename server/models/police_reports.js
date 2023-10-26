'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Police_Reports extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Police_Reports.init({
    report_id: DataTypes.INTEGER,
    date: DataTypes.STRING,
    time: DataTypes.STRING,
    report: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Police_Reports',
  });
  return Police_Reports;
};