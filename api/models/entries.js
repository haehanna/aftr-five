'use strict';
module.exports = function(sequelize, DataTypes) {
  var Entries = sequelize.define('Entries', {
    title: DataTypes.STRING,
    date: DataTypes.STRING,
    category: DataTypes.STRING,
    image: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Entries;
};