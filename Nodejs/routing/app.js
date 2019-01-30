var express=require('express')
const app=express()
app.set("view engine","ejs")
var emprouter=require('./Routes/Emprouter')
var prorouter=require('./Routes/prorouter')
app.get("/",function(req,res)
{
    res.render("home")
})
app.use("/employee",emprouter)
app.use("/Products",prorouter)

app.listen(8000,function(req,res)
{
        console.log('server started')
})