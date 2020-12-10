'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Guide extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Guide.hasMany(models.Review, { foreignKey: "guideId" });
      Guide.belongsToMany(models.User, {
        through: "UserGuide",
        foreignKey: "guideId",
        otherKey: "userId",
      });
    }
  };
  Guide.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Guide',
  });
  return Guide;
};