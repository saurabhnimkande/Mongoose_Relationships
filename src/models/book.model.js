const mongoose =require('mongoose');

const BookSchema= new mongoose.Schema({
    book_name:{type:String, require:true},
    book_body:{type:String, require:true},
    book_author:[{type:mongoose.Schema.Types.ObjectId,
    ref:"author",
    required:true
}]
}, {
    versionKey:false,
    timestamps:true
})

module.exports= mongoose.model('book',BookSchema);