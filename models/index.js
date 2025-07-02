//File: models/index.js
const sequelize = require('../config/db');
const User = require('./user');


async function syncModels() {
  try {
    await sequelize.sync({ force: false }); // Set force to true to drop and recreate tables
    console.log('Models synchronized successfully.');
  } catch (error) {
    console.error('Error synchronizing models:', error);
  }
}

module.exports = {
  sequelize,
  User,
  syncModels
};