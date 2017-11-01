module.exports = (sequelize, DataTypes) => {
const Votes = sequelize.define('Votes', {
  upvotes: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
  downvotes: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
 
  });
        
    Votes.associate = (models) => {
        Votes.belongsTo(models.receipe, {
            foreignKey: 'id',
            onDelete: 'CASCADE',
        });
    };
  return Votes;
};