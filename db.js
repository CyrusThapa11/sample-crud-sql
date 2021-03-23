const Sequelize = require('sequelize')

const db = new Sequelize({
    dialect:'mysql',
    storage: __dirname + './test.db'
})

 // User is a class and users is name of table 
const User = db.define('user', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey: true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
    }
})



exports = module.exports ={
    User
}