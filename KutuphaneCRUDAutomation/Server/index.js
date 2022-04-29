const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');
const LbraryModel=require("./Module/LibraryModel");
const LibraryModel = require('./Module/LibraryModel');

const app=express();

app.use(express.json());
app.use(cors());


mongoose.connect("mongodb+srv://sa:123@cluster0.cso4x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

app.get("/",(req,res)=>{
    LibraryModel.find({},(err,result)=>{
        if (err) {
            res.json(err);
        }
        else
        {
            res.json(result);
        }
    })
});

app.post("/",async(req,res)=>{
    const library=req.body;
    const newLibrary=new LibraryModel(library);
    await newLibrary.save();
    res.json(library);
});

app.put("/",async(req,res)=>{
const newBookName=req.body.newBookName;
const newPublisher=req.body.newPublisher;
const isbn=req.body.isbn;
try {
    await LibraryModel.find({isbn},(err,libraryModelUpdate)=>{
        if (err) {
            req.json(err);
        }
        else{
            libraryModelUpdate.bookName=newBookName;
            libraryModelUpdate.publisher=newPublisher;
            libraryModelUpdate.save();
        }
    });
    req.json("Updated finished");
    
    
} catch (error) {
    console.log(error)
}
});

app.delete("/",async(req,res)=>{

    const isbn=req.body.isbn;
    await LibraryModel.find({isbn},(err,libraryModelDelete)=>{
        if (err) {
            req.json(err);
        }
        else{
           
            libraryModelDelete.remove();
        }
    })
})

app.listen("3030",()=>{
    console.log("Server Çalışıyor");
})




