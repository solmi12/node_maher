const { DataTypes} = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
  },
   
    nom: {
      type: DataTypes.STRING
    },
    prenom: {
      type: DataTypes.STRING
    },
    numero: {
      type: DataTypes.STRING
    },
    mail: {
      type: DataTypes.STRING
    },
    
    adresse: {
      type: DataTypes.STRING
    },
    gouvernorat: {
      type: DataTypes.STRING
    },

    password: {
      type: DataTypes.STRING
    },
    role: {
      type: DataTypes.STRING
    }

  });

  return User;
};
