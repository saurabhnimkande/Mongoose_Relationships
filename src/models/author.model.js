const mongoose = require("mongoose");

const authorSchema= new mongoose.Schema({
    first_name:{type:String, require:true},
    last_name:{type:String, require:true},
    gender:{type:String, require:true},
    age:{type:Number, require:true},
}, {
    versionKey:false,
    timestamps:true
})

module.exports= mongoose.model('author',authorSchema);