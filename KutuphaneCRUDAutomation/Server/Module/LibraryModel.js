 const mongoose = require('mongoose');

 const librarySchema= new mongoose.Schema({

    isbn:{
        type:String,
        required:true
    },
    bookName:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    publisher:{
        type:String,
        required:true
    },
    publishDate:{
        type:String,
        required:false
    },
    pageNumber:{
        type:Number,
        required:false
    },
    img:{
        type:String,
        required:false
    }

 });

 const LibraryModel=mongoose.model("libraryAutomations",librarySchema);
 module.exports=LibraryModel;