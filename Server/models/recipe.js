module.exports = (sequelize, DataTypes) => {
  const Receipe = sequelize.define('Recipe', {
    
      recipe_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ingredients: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  });
        // associations is being defined here
        Receipe.associate = (models) => {
        Receipe.belongsTo(models.user, {
            foreignKey: 'id',
            onDelete: 'DOXA',
        });
    };
  return Receipe;
};