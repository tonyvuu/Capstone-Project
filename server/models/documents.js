'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Documents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Documents.belongsTo(models.People, {
        foreignKey: "person_id"
      });
    }
  }
  Documents.init({
    document_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    type: DataTypes.STRING,
    info: DataTypes.STRING,
    image: DataTypes.STRING,
    person_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Documents',
  });
  return Documents;
};