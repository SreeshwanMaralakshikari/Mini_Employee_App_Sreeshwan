import exp from 'express';
import { EmployeeModel } from "../models/EmployeeModel.js";

export const employeeApp=exp.Router();

// 1) Create Employee
employeeApp.post("/create-emp",async(req,res,next)=>{
    try
    {
        //get employee body from req
        const newEmployee=req.body;

        //create a employee doc using employee body
        const newEmployeeDoc=new EmployeeModel(newEmployee);
        const result=await newEmployeeDoc.save();

        console.log("Result: ",result);
        res.status(201).json({message:"New Employee Created",payload:result});
    }
    catch(err) 
    {
        next(err);
    }
});

// 2) Read all Employees
employeeApp.get("/list",async(req,res,next)=>{
    try
    {
        //read all employees from dataabse
        const employeeList=await EmployeeModel.find();

        //if employee list length is 0,
        if(employeeList.length===0)
        {
            return res.status(200).json({message:"No employees found",payload:[]});
        }

        //return res
        res.status(200).json({message:"Employees List",payload:employeeList});
    }
    catch(err)
    {
        next(err);
    }
});

// 3) Edit Employee
employeeApp.put("/employees/:id",async(req,res,next)=>{
    try 
    {
        //get modified employee id from req
        const modifiedEmployeeId=req.params.id;
        
        //get modified employee body from req
        const modifiedEmployee=req.body;

        //find the employee by id and update it 
        const updatedEmployee=await EmployeeModel.findByIdAndUpdate(
            modifiedEmployeeId,
            {...modifiedEmployee},
            {new:true,runValidators:true}
        );

        //if employee to be updated not found
        if(!updatedEmployee)
        {
            //return employee not found
            return res.status(404).json({ message:`Employee with ${modifiedEmployeeId} not found`});
        }

        //return res
        res.status(200).json({message:`Employee with ${modifiedEmployeeId} is modified`,payload:updatedEmployee});
    }
    catch(err)
    {
        next(err);
    }
});

// 4) Delete Employee
employeeApp.delete("/employees/:id",async(req,res,next)=>{
    try
    {
        //get Id of Deleting Employee from req
        const IdOfDeletedEmployee = req.params.id;

        //find by id and delete the employee with IdOfDeletedEmployee
        const deletedEmployee=await EmployeeModel.findByIdAndDelete(IdOfDeletedEmployee);

        //If deleted employee not found
        if(!deletedEmployee)
        {
            //then return employee not found
            return res.status(404).json({message:`Employee with ${IdOfDeletedEmployee} not found`});
        }

        //return res
        res.status(200).json({message:`Employee with ${IdOfDeletedEmployee} is deleted`, payload: deletedEmployee});
    }
    catch(err)
    {
        next(err);
    }
});
