var express = require("express")
var bodyparser = require("body-parser")
const app = express()
var gh=require("./exportfn")
r04:27 PM 31/01/2019e
app.set("view engine","ejs")
var books=[{bid:"books",bname:"nodejs",author:"google",price:3000},{bid:"books1",bname:"nodejs1",author:"google1",price:4000},{bid:"books2",bname:"nodejs2",author:"google2",price:2000}]
app.get("/",function(req,res)
{
    res.render("login")
    console.log(gh.get())
})
app.get("/signup",function(req,res)
{
    res.render("signup")
})
app.post("/home",function(req,res)
{
    res.render("home",{data:books})
})
app.listen(8000,function(req,res)
{
    console.log("server started running")
})