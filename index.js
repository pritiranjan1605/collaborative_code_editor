const express = require('express')
const http = require('http')
const app = express();
const path = require('path');
const mongoose = require('mongoose')


mongoose.connect("mongodb://127.0.0.1:27017/code_editor").then((req,res)=>{
    console.log("mongoose connected")
}).catch((err)=>console.log(err))

const userrouter = require('./routes/login');
const user = require('./models/user')




app.set('view engine',"ejs")
app.set('views',path.resolve("./views"))


app.use(express.urlencoded({extended:false}))
app.use(express.static(path.resolve('./public')))

app.use('/',userrouter)

app.get('/',(req,res)=>{
    return res.render('signup')
})

const port = 8000;
const myserver = http.createServer(app);
myserver.listen(port, () => {
    console.log("hello server connected")
})


