const express=require('express');

const Book = require('../models/book.model');

const router=express.Router();

router.post("",async (req, res) => {
    try {
        const book= await Book.create(req.body);
        return res.status(201).send(book);
    } catch (e) {
        return res.status(500).json({message:e.message});
    }
})


router.get("",async (req, res) => {
    try {
        const books= await Book.find().populate("book_author").lean().exec();
        return res.send(books);
    } catch (e) {
        return res.status(500).json({message:e.message});
    }
})

router.delete("/:id",async (req, res) => {
    try {
        const book= await Book.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(book)
    } catch (e) {
        return res.status(500).json({message:e.message});
    }
})

module.exports=router;