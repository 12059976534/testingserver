'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('UserTable', {
    name: DataTypes.STRING,
    
  }, { 
  });
  
  return UserTable;
};