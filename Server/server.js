const express = require('express');

const app = express();

const mongoose = require('mongoose');

var bodyPrser = require('body-parser');

const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use(bodyPrser.urlencoded({extended:true}))

app.use(bodyPrser.json())

const logWinston = require('../SERVER/log/log');

const multer = require('multer');





//Mongoose
mongoose.connect('mongodb://localhost:27017/MarketPlace',{
    useNewUrlParser : true
}).then(()=>{
    logWinston.info('Successfully Connected to the Database');
}).catch(err =>{
    logWinston.error('could not connect to the database . Exiting now..',
    process.exit());
});




app.get('/', (req,res)=>{
    res.send('Welcome to MarketPlace')
})
//_______________Import______________

require('./Router/superadmin.router')(app);
require('./Router/seller.router')(app);
require('./Router/Admin.router')(app);
require('./Router/Client.router')(app);
require('./Router/Email')(app);

const Port = process.env.PORT || 8080;
app.listen(Port,()=>{
    console.log("Your Server is on ",`http://localhost:${Port}`);
})












app.use(express.static(__dirname + '/public'));

// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, 'uploads/');
//     },

//     // By default, multer removes file extensions so let's add them back
//     filename: function(req, file, cb) {
//         cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//     }
// });