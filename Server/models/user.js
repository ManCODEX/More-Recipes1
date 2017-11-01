module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
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