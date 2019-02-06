var express=require("express")
const app=express()
var bodyparser = require("body-parser")
var mongoose=require("mongoose")
app.set("view engine","ejs")
const fileUpload=require("express-fileupload");
app.use(fileUpload())
app.use(bodyparser.urlencoded({extended:false}))
var db="mongodb://localhost/amazon"
mongoose.connect(db,function(err)
{console.log(err)})
var book=require("./model/book.js")
app.get("/",function(req,res){
    res.render("home")
}
)
app.get("/add",function(req,res)
{
    res.render("add")
})
app.post("/upload",function(req,res)
{
    let samplefile=req.file.bphoto
    samplefile.mv(__dirname+"/images/"+samplefile.name,function(err,result)
    {
        if(err)
        {res.send(err)}
        else{
            console.log("file Uploaded")
        }
    })
    let path="../images/"+samplefile.name;
    var b1=new book()
    b1.bid=req.body.bid
    b1.bname=req.body.bname
    b1.bprice=req.body.bprice
    b1.bauther=req.body.bauther
    b1.bphoto=path
})
app.post("/view",function(req,res){
    book.find({},function(err,result){
        if(err)
        {
            res.send("Error")
        }
        else{
            res.render("view",{data:result})
        }
     
        
    })
}
)

app.listen(8000,function(req,res)
{
    console.log("server started")
})