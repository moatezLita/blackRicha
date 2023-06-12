'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Sommiers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      size: {
        type: Sequelize.STRING,
        allowNull: false
      },
      
      price: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      categoryId:{
        allowNull: false,
        type :Sequelize.INTEGER ,
        references:{
          model:'Categories' ,
          key :'id'
        } ,
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
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

    // Add any additional associations or constraints here

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Sommiers');
  }
};
