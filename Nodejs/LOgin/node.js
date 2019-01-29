var express=require('express')
const app= express()
var bodyparser = require("body-parser")
app.use(bodyparser.urlencoded({extended:true}))
app.get("/",function(req,res)
{
    res.sendFile(__dirname+"/login.html")
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
app.post("signup",function(req,res){
  
    res.send("successfully registerd")
}
)
app.listen(5000,function(req,res)
{
    console.log("server started running")
})