const mongoose=require('mongoose')
const {Schema}=mongoose
const MySchema= new Schema({
    username:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true},
    date:{type:Date, default:Date.now}
})
module.exports=mongoose.model("CrudData",MySchema)