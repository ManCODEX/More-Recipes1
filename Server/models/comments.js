module.exports = (sequelize, DataTypes) => {
  var comments = sequelize.define('comments', {
    clientid: DataTypes.INTEGER,
    receipeid: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return comments;
};