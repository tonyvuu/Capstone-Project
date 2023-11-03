'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Alibis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Alibis.belongsTo(models.People, {
        foreignKey: "person_id"
      });
      Alibis.belongsTo(models.Interviews, {
        foreignKey: "interview_id"
      });

    }
  }
  Alibis.init({
    alibi_id: DataTypes.INTEGER,
    person_id: DataTypes.INTEGER,
    interview_id: DataTypes.INTEGER,
    alibi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Alibis',
  });
  return Alibis;
};