var mongoose=require("mongoose")
var Schema=mongoose.Schema
var BookSchema=new Schema({
    bid:{type:Number},
    bname:{type:String},
    bauther:{type:String},
    bphoto:{type:String},
    bprice:{type:Number}
})
module.exports=mongoose.model("book",BookSchema)