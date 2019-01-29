var express = require('express')
const app=express()
app.get("/",function(req,res){
    res.send("<html><body><h1><b>Error 404 </b></h1></body></html> ")
})
app.get("/employee",function(req,res){
    res.send("<html><body><h1><b>Employee details </b></h1></body></html> ")
})
app.listen(8000,function(req,res)
{
    console.log("server started running")
}
)
