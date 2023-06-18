const express= require("express");
const expressLayouts=require('express-ejs-layouts');

require(`dotenv`).config();

const app=express()

const port=process.env.PORT || 80;

require(`dotenv`).config();
const path=require('path')
app.set('view engine','ejs')

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')))

app.set('layout','./layouts/head');

app.use(expressLayouts);
app.use(express.json());

app.get('/',(req,res)=>{
    res.render('html/index')
})

app.get('/room',(req,res)=>{
    res.render('html/room',{
        title:'Room'
    })
})

const server = app.listen(port, function () {
    console.log('listening to port 80')
});

module.exports=app