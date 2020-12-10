'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserGuide extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UserGuide.init({
    userId: DataTypes.INTEGER,
    guideId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserGuide',
  });
  return UserGuide;
};