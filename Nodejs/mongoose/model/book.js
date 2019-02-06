var mongoose=require("mongoose")
var Schema=mongoose.Schema
var BookSchema=new Schema({
    bookid:{type:Number},
    bname:{type:String},
    auther:{type:String}
})
module.exports=mongoose.model("book",BookSchema)