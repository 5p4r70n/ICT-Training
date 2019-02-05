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
app.get("/home/new",function(req,res)
{
    res.render("new")
})
app.post("/insert",function(req,res)
{
console.log("button pressed")
console.log(req.body.txtname + req.body.salary)
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
app.get("/home/view",function(req,res)
{
    mongoclient.connect(url,function(err,database)
    {
        if(err)
        {
            console.log(err)
        }
        else{
            var dtb=database.db('sample');
            var empcol=dtb.collection("employee")
            empcol.find().toArray(function(err,result){
                res.render('view',{empdata:result})
                console.log(result)

            })
        }
    })
})
app.get("/home/delete",function(req,res)
{
    mongoclient.connect(url,function(err,database)
    {
        if(err)
        {
            console.log(err)
        }
        else{
            var dtb=database.db("sample");
            var empcol=dtb.collection("employee")
            empcol.find().toArray(function(err,result)
            {res.render('delete',{empdata:result})
        })
        }
    })
})
app.post("/empdel",function(req,res)
{   
    console.log(req.body.empname)
    mongoclient.connect(url,function(err,database)
    {
        if(err)
        {
            console.log(err)
        }
        else {
            var dtb=database.db("sample")
            var empcol=dtb.collection("employee")
            empcol.remove({"Fname":req.body.empname},function(err,reslt){
                if(err){
                    res.send("error")
                }
                else{
                    res.send("deleted successfully")
                }
            }) 
        }
    })
})

app.get("/home/edit",function(req,res)
{
   console.log(req.body.empname)
   mongoclient.connect(url,function(err,database)
   {
       if (err)
       {
           console.log(err)
       }
       else{
           var dtb=database.db("sample")
           var empcol=dtb.collection("employee")
           empcol.find().toArray(function(err,result){
            res.render('edit',{empdata:result})
        })
       }
   }
   )
})
app.post("/editemp",function(req,res){
        var empname = {"Fname":req.body.empname}
    mongoclient.connect(url,function(err,database)
    {
        if(err){
            console.log(err)
        }
        else{
            var dtb=database.db("sample")
            var empcol=dtb.collection("employee")
           empcol.find(empname).toArray(function(err,result){
               if(err)
               {
                   console.log(err)
               }
               else {
                res.render("editemp",{empdata:result})
                console.log(result)
               }

            })
        }
    })
})
app.post("/update",function(req,res){
    console.log(req.body.edtname)
    console.log(req.body.edtsal)
    mongoclient.connect(url,function(err,database)
    {
        if(err){
            console.log(err)
        }
        else {
        var dtb=database.db("sample")
        var empcol=dtb.collection("employee")
        empcol.update({Fname:req.body.edtname},{$set:{Fname:req.body.edtname,salary:req.body.edtsal}},{upsert:1},function(err,reslt){
            if(err) {
                res.send(err)
            }
            else{
                res.send("Updated successfully")
            }
        })
        }
    })
})
app.listen(8000,function(req,res)
{
    console.log("server started")
})
