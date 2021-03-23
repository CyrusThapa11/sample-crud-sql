const express = require('express')
const app = express();
const route = express.Router();
const path = require('path');

const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('view engine','ejs');
app.set('views','public'  );
app.use(express.static(path.join(__dirname, 'public')));
// app.use((path.join(__dirname, '/public')));


const {User} = require('./db')

app.get('/' , (req,res)=>{
    res.render('indexx')
})


app.get('/create'  ,  (req,res)=>{
    // console.log('showgin all users');
    res.render('userC')
} );



app.get('/user'  , async (req,res)=>{
    console.log('showgin all users');
    const users = await User.findAll();
    // res.send(users);
    res.render('indexX' , {users})
} );

app.post('/user'  , async (req,res)=>{
    console.log('showgin all users');
    for(let i  = 1 ; i <= 2 ; i++){
        let name= (['abhishek','dhruv','adarsh','arpit','aryan','akshay','mihir','deepak','prajwal','arpan'])[parseInt(Math.random()*10)]
        await User.create({
            name
        })
    }
} );


app.post('/create'  , async (req,res)=>{
        const {name} = req.body;
        // console.log('-----------------------name : ' , name , '--------------------');
        await User.create({
            name
        })

    res.redirect('/')
} );
db.sync({alert:true})
    .then(()=>{

        app.listen(PORT , ()=> console.log('running at https://localhost:3000'))
        // console.log('Database created succesfully');
    })
