const express=require('express');
const mongoose=require('mongoose');

const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/library")
}


//--------------------------Author Schema--------------------------
const authorSchema= new mongoose.Schema({
    first_name:{type:String, require:true},
    last_name:{type:String, require:true},
    gender:{type:String, require:true},
    age:{type:Number, require:true}
}, {
    versionKey:false,
    timestamps:true
})

const Author= mongoose.model('author',authorSchema);

//-------------------------BookSchema-----------------------------------
const BookSchema= new mongoose.Schema({
    book_name:{type:String, require:true},
    book_body:{type:String, require:true}
})

const Book= mongoose.model('book',BookSchema);

//-------------------------SectionSchema--------------------------------
const SectionSchema= new mongoose.Schema({
    section1:[{type:String, require:false}]
})

const Section= mongoose.model('section',SectionSchema);



//=========================================================================================
const app = express();
app.use(express.json());
//==========================================================================================

//------------------------authors controller-------------------------------------------

app.post("/authors",async (req, res) => {
    try {
        const author= await Author.create(req.body);
        return res.status(201).send(author);
    } catch (err) {
        return res.status(500).json({message:e.message});
    }
});

app.get("/authors",async (req, res) => {
    try{
        const author= await Author.find().lean().exec();
        return res.send(author);
    } catch (err) {
        return res.status(500).json({message:e.message});
    }
})




app.listen(2525,async ()=> {
    await connect();
    console.log("listen on port 2525")
})