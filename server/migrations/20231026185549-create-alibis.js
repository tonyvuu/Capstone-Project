"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Alibis", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      alibi_id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
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
      interview_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Interviews",
          key: "id",
          as: "interview_id"
        },
        allowNull: false
      },
      alibi: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Alibis");
  },
};
