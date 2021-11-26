const mongoose=require('mongoose');

const SectionSchema= new mongoose.Schema({
    book_id: {type:mongoose.Schema.Types.ObjectId,
    ref:"book",
    required:true,
    unique:true
}
},{
    versionKey:false,
    timestamps:true
})

module.exports= mongoose.model('section',SectionSchema);

