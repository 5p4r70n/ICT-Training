var express=require('express')
var router=express.Router()

router.get("/",function(req,res)
{
    res.render("emphme")
})
router.get("/add",function(req,res)
{
    res.render("empadd")
})
router.get("/del",function(req,res)
{
    res.render("empdel")
})
router.get("/edit",function(req,res)
{
    res.render("empedit")
})
router.get("/view",function(req,res)
{
    res.render("empview")
})
module.exports=router;