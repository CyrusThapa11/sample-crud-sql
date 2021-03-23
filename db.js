const Sequelize = require('sequelize')

const db = new Sequelize({
    dialect:'mysql',
    storage: __dirname + './test.db'
})

 // User is a class and users is name of table 
const User = db.define('users', {
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


db.sync()
    .then(()=>{
        console.log('Database created succesfully');
    })
    .catch(()=> console.log('Error could not create a database'))

exports = module.exports ={
    User
}