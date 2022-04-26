const mongoose = require('mongoose');


const EmployeeSchema=new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    username:{
        type:String,
        required:true
    }
})

const EmployeeModel=mongoose.model("emplyees",EmployeeSchema);
module.exports=EmployeeModel;

