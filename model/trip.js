const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

class Trip extends Model {}

Trip.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tripBudget: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    travellerAmount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    travellerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'traveller',
        key: 'id',
      },
    },
    locationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'location',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'trip',
  }
);

module.exports = Trip;