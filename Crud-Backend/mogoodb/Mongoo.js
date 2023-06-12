const mongoose=require('mongoose')
const url="mongodb://localhost:27017/Crud"
const mongoo=()=>{
    try {
mongoose.connect(url,()=>{console.log("Mongoo connected")})
    } catch (error) {
        
    }
}

module.exports=mongoo