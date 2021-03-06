const Sequelize = require('sequelize')
const bcrypt = require('bcryptjs')
const Database = require('../services/database')

module.exports = Database.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING,
    defaultValue: Sequelize.UUIDV1,
    allowNull: false,
    unique: true,
  },
  mobilephone: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  role_id: {
    type: Sequelize.TINYINT,
    defaultValue: 2,
  },
  status_id: Sequelize.TINYINT,
  degree_id: Sequelize.TINYINT,
  identity_number: Sequelize.STRING,
  active: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  available: {
    type: Sequelize.SMALLINT,
    defaultValue: 0,
  },
  gender: Sequelize.BOOLEAN,
  name: Sequelize.STRING,
  city: Sequelize.STRING,
  company: Sequelize.STRING,
  bio: Sequelize.TEXT,
  cost: {
    type: Sequelize.SMALLINT,
    defaultValue: 0,
  },
  commission: {
    type: Sequelize.TINYINT,
    defaultValue: 80,
  },
  last_signin: {
    type: Sequelize.DATE,
    defaultValue: new Date(),
  },
}, {
  paranoid: true,
  hooks: {
    afterValidate(sourceInput) {
      const input = sourceInput
      if (input.password) {
        input.password = bcrypt.hashSync(input.password, 8)
      }
    },
  },
})
