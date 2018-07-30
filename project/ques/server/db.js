const Sequelize = require('sequelize')
module.exports = new Sequelize('qita', 'root', '', {
  host: '127.0.0.1',
  dialect: 'mysql',
  operatorsAliases: false,
  define:{
    freezeTableName:true,
    timestamps: false,    
  }
})