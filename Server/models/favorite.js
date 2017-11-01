'use strict';
module.exports = (sequelize, DataTypes) => {
  var favorite = sequelize.define('favorite', {
    clientid: DataTypes.INTEGER,
    receipeid: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return favorite;
};