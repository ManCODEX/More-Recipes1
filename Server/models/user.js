module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
          
    password: {
        type: DataTypes.STRING,
        allowNull: false, 
  },
   });
    
        // associations is being defined here
        User.associate =(models) => {
            User.hasMany(models.recipe, {
                foreignkey: 'id'
            });
        };  
      
    
  return User;
};