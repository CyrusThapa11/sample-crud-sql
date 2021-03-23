const Sequelize = require('sequelize')

const db = new Sequelize('sampledb2' , 'myuser2' ,'mnbvcxZ1!',{
    host:'localhost',
    dialect:'mysql',
    pool:{
        min:0,
        max:5
    }
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