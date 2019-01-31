var express=require('express')
const app=express()
var bodyparser = require("body-parser")
app.set("view engine","ejs")
var mongodb = require('mongodb')
var mongoclient=mongodb.MongoClient;
app.use(bodyparser.urlencoded({extended:true}))
var url="mongodb://127.0.0.1:27017/sample"
app.get("/",function(req,res)
{
    res.render("home")
}
)
app.post("/insert",function(req,res)
{
console.log("button pressed")
console.log(req.body.txtname)
mongoclient.connect(url,function(err,database){
    var dtb=database.db("sample");
    var empcol=dtb.collection("employee");
    var data={"Fname":req.body.txtname,"salary":req.body.salary}
    empcol.insert(data,function(err,rslt){
        if(err){res.send("something went Wrong")}
        else{res.send("data inserted successfully")}
    })
})
 
}
)
app.listen(8000,function(req,res)
{
    console.log("server started")
})
