const EmployeeModel = require('./models/Employees');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());


app.use(cors());
mongoose.connect("mongodb+srv://admin:14521453@cluster0.oeoj1.mongodb.net/fullstack?retryWrites=true&w=majority");
app.get("/getEmplyees",(req,res)=>{
    EmployeeModel.find({},(err,result)=> {
        if (err) {
    res.json(err);
            
        }
        else{
            res.json(result);
    
        }
    })
    })

    app.post("/createEmployee",async(req,res)=>{
        const employee=req.body;
        const newEmployee=new EmployeeModel(employee);
        await newEmployee.save();
        res.json(employee);
    })

    app.put("/updateEmployee",async(req,res)=>{
        const newName=req.body.newName;
        const newAge=req.body.newAge;
        const id=req.body.id;
        console.log(id)
        try {
            await EmployeeModel.findById(id,(error,updatedEmployee)=>{
                updatedEmployee.name=newName;
                updatedEmployee.age=newAge;
                updatedEmployee.save();

            });
        } catch (error) {
            console.log(error)
        }
        res.json("updated işlemi bitti")
    });
    app.delete("/deleteEmployee/:id",async(req,res)=>{
        const id=req.params.id;

        await EmployeeModel.findByIdAndRemove(id).exec();
        res.send("deleted");
    });
    
app.listen(3030,()=>{
    console.log("Server Çalışıyor");
})
