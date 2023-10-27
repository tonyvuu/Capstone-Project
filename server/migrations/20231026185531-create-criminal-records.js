'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Criminal_Records', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      record_id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      crime: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      info: {
        type: Sequelize.STRING
      },
      person_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "People",
          key: "id",
          as: "person_id"
        },
        allowNull: false
      },
      date: {
        type: Sequelize.STRING
      },
      alias: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.INTEGER
      },
      height: {
        type: Sequelize.INTEGER
      },
      hair_color: {
        type: Sequelize.STRING
      },
      eye_color: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Criminal_Records');
  }
};