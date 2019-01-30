var express=require('express')
const app= express()
var bodyparser = require("body-parser")
app.use(bodyparser.urlencoded({extended:true}))
app.get("/",function(req,res)
{
    res.sendFile(__dirname+"/login.html")
})
app.get("/home",function(req,res)
{
    res.send(__dirname+"/home.html")
})
app.post("/home",function(req,res)
{if(req.body.txtuser=="jothish"&&req.body.txtpass=="123456")
    {
    res.sendFile(__dirname+"/home.html")
    }

else{
    res.send("password incorrect")
    }
}
)
app.get("/home/signup",function(req,res)
{
    res.sendFile(__dirname+"/signup.html")
})
app.post("/signup1",function(req,res){
  
    res.send("<html><body><h1><b>Successfully registerd</b></h1><br>Name: "+req.body.myname+"<br>Mobile NO : "+req.body.mno+"<br>Password : "+req.body.pass +"<br><a href='/home'>Home</a></body></html>")
}
)
app.listen(5000,function(req,res)
{
    console.log("server started running")
})