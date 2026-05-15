import { Schema, model } from "mongoose";

const employeeSchema=new Schema({
    name:
    {
        type: String,
        required:[true,"Name is Required"]
    },
    email:
    {
        type: String,
        required:[true,"Email is Required"],
        unique:[true,"Email already exists"]
    },
    mobile:
    {
        type: Number,
        required:[true,"Mobile Number is Required"]
    },
    designation:
    {
        type: String,
        required:[true,"Role is Required"]
    },
    companyName:
    {
        type: String,
        required:[true,"Company Name is Required"]
    }
},
{
    timestamps:true,
    versionKey:false,
    strict:"throw"
});

export const EmployeeModel=model("employee",employeeSchema);
