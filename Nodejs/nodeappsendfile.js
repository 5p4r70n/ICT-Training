var express = require('express')
const app=express()
app.get("/",function(req,res){
    res.sendfile("./login.html")
})
app.get("/home",function(req,res)
{
    res.sendfile("./HOME.html")
})
app.listen(8000,function(req,res)
{
    console.log("server started running")
}
)
