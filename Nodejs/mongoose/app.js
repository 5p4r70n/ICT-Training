var express=require("express")
const app =express()
var bodyparser = require("body-parser")
var mongoose=require("mongoose")
app.set("view engine","ejs")
const fileUpload=require("express-fileupload");
app.use(fileUpload())
app.use(bodyparser.urlencoded({extended:false}))
var db="mongodb://localhost/example"
mongoose.connect(db,function(err)
{console.log(err)})
var book=require("./model/book.js")
app.get("/",function(req,res){
    res.render("home")
}
)
app.post("/insert",function(req,res)
{
    console.log(req.body.bid)
    var b1=new book()
    b1.bookid=req.body.bid
    b1.bname=req.body.bname
    b1.auther=req.body.auther
    b1.save(function(err,result)
    {
        if(err){res.send(err)}
        else{res.send("data inserted")}
    })
})
app.post("/delete",function(req,res)
{
    console.log(req.body.delbid)
    book.deleteOne({"bookid":req.body.delbid},function(err){
        if(err){res.send(err)}else{
            res.send("deleted")
        }
    })
})
app.post("/view",function(req,res){
    book.find({"bname":req.body.viwbook},function(err,result){
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
app.post("/edit",function(req,res){
book.findOne({"bookid":req.body.ebid},function(err,result)
{
    if(err)
    {
        res.send(err)
    }
    else{
        result.bookid=1004
        result.bname="wigs of fire"
        result.auther="apj"

        
        result.save(function(err,result2)
        {
            if(err)
            {
                res.send(err)
            }
            else{
                res.send("success")
            }
        })
    }

})
})
app.post("/upload",function(req,res)
{
    let samplefile=req.files.samplefile
    samplefile.mv(__dirname+"/images/f1.jpg",function(err,result)
    {
        if(err)
        {res.send(err)}
        else{
            res.send("file Uploaded")
        }
    })
})
app.post("/login",function(req,res)
 {
    let name=req.body.uname
})
app.listen(8000,function(req,res)
{
    console.log("server started")
})