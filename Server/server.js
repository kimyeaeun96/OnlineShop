const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require("body-parser");


app.use(express.urlencoded({extended: true}));
app.use( bodyParser.json() );

const router = require('./routes/user')
app.use('/user', router)

app.listen(port, ()=>{
    console.log( "Server Port : ", port );
})

