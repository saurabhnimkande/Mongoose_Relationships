const express=require('express');

const Author = require('../models/author.model');

const Book = require('../models/book.model');

const router=express.Router();

router.post("",async (req, res) => {
    try {
        const author= await Author.create(req.body);
        return res.status(201).send(author);
    } catch (e) {
        return res.status(500).json({message:e.message});
    }
});

router.get("",async (req, res) => {
    try{
        const authors= await Author.find().lean().exec();
        return res.send(authors);
    } catch (e) {
        return res.status(500).json({message:e.message});
    }
})

router.get("/:id/books",async (req, res) => {
    try{
        const authors= await Author.findById(req.params.id).lean().exec();
        const books =await Book.find({book_author:authors._id}).populate("book_author").lean().exec()
        return res.send(books);
    } catch (e) {
        return res.status(500).json({message:e.message});
    }
})


router.delete("/:id",async (req, res) => {
    try {
        const author= await Author.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(author)
    } catch (e) {
        return res.status(500).json({message:e.message});
    }
})


module.exports=router;