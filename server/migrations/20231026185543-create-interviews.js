'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Interviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      interview_id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
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
      report_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Police_Reports",
          key: "id",
          as: "report_id"
        },
        allowNull: false
      },
      info: {
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
    await queryInterface.dropTable('Interviews');
  }
};