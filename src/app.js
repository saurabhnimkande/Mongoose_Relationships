const express=require('express');
const connect=require('./configs/db')

const authorController=require('./controllers/author.controller');
const bookController=require('./controllers/book.controller');
const sectionController=require('./controllers/section.controller');

const app = express();
app.use(express.json());

app.use("/authors",authorController);
app.use("/books",bookController);
app.use("/sections",sectionController);

app.listen(2525,async ()=> {
    await connect();
    console.log("listen on port 2525")
})