var express=require("express")
const app = express()
app.get("/",function(req,res){
    res.sendfile("./HOME.html")
})
app.get("/home/employee",function(req,res){
    res.sendfile("./employee.html")
})
app.get("/home/employee/empad",function(req,res){
    res.send("Employee added Sucessfully")
})
app.get("/home/employee/delemp",function(req,res){
    res.send("Employee Deleted Sucessfully")
})
app.get("/home/Products",function(req,res) {
    res.sendfile("./pro.html")
})
app.get("/home/products/addpr",function(req,res){
    res.send("Add Product Sucessfully")
})
app.get("/home/products/rempr",function(req,res){
    res.send("Deleted Product Sucessfully")
})

app.listen(8000,function(req,res)
{
    console.log("server started running")
})