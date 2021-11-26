const express=require('express');

const Section=require('../models/section.model');

const Book = require('../models/book.model');

const router=express.Router();


router.post("",async (req, res) => {
    try {
        const section= await Section.create(req.body);
        return res.status(201).send(section);
    } catch (e) {
        return res.status(500).json({message:e.message});
    }
})


router.get("",async (req, res) => {
    try {
        const sections= await Section.find().populate({path:"book_id",populate:{path:"book_author"}}).lean().exec();
        return res.send(sections);
    } catch (e) {
        return res.status(500).json({message:e.message});
    }
})


router.get("/oneauthor",async (req, res) => {
    try {
        const books= await Book.find({book_author:{$size:1}}).lean().exec();
        const sections= await Section.find().lean().exec();
        return res.send(books);
    } catch (e) {
        return res.status(500).json({message:e.message});
    }
})

router.delete("/:id",async (req, res) => {
    try {
        const section= await Section.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(section)
    } catch (e) {
        return res.status(500).json({message:e.message});
    }
})

module.exports =router;
