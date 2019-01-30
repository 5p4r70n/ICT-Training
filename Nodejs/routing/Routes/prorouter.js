var express = require('express')
var router=express.Router()

router.get("/",function(req,res){
    res.render("prohome")
})
router.get("/pri",function(req,res){
    res.render("printer")
})
router.get("/sca",function(req,res){
    res.render("scanner")
})
router.get("/pri/add",function(req,res){
    res.send("<center><h1>Printer Added successfully</h1></center>")
})
router.get("/pri/rem",function(req,res){
    res.send("<center><h1>Printer Removed successfully</h1></center>")
})
router.get("/sca/add",function(req,res){
    res.send("<center><h1>Scanner Added successfully</h1></center>")
})
router.get("/sca/rem",function(req,res){
    res.send("<center><h1>Scanner Removed successfully</h1></center>")
})


module.exports=router;