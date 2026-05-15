import { useForm } from "react-hook-form";
import { useState } from 'react';
import { useNavigate } from "react-router";
import axiosInstance from "../axiosInstance";
import {
  pageBackground,
  formCard,
  formTitle,
  formGroup,
  labelClass,
  inputClass,
  submitBtn,
  errorClass,
  loadingClass,
} from "../styles/common";

function CreateEmp() {
  const[loading,setLoading]=useState(false);
  const[error,setError]=useState(null);
  const navigate=useNavigate();

  const {
    register,
    handleSubmit,
    formState:{errors},
  } = useForm();

  const onFormSubmit=async(newEmployeeObj)=>{
    try 
    {
      setLoading(true);
      setError(null);
      const res=await axiosInstance.post("/emp-api/create-emp",newEmployeeObj);

      if(res.status===201) 
      {
        navigate("/list");
      }
    }
    catch(err) 
    {
      console.log("Error is: ",err);
      setError(err.response?.data?.error||err.message||"Something went wrong");
    } 
    finally 
    {
      setLoading(false);
    }
  };

  if(loading)
  {
    return <p className={loadingClass}>Creating Employee...</p>;
  }

  return (
    <div className={`${pageBackground} py-16 px-4`}>
      <div className={formCard}>
        <h1 className={formTitle}>Add New Employee</h1>

        {/* API Error */}
        {error && <p className={`${errorClass} mb-5`}>{error}</p>}

        <form onSubmit={handleSubmit(onFormSubmit)}>

          <div className={formGroup}>
            <label className={labelClass}>Full Name</label>
            <input
              type="text"
              placeholder="Enter your Full Name"
              className={inputClass}
              {...register("name",{required:"Name is required"})}
            />
            {errors.name && <p className={errorClass}>{errors.name.message}</p>}
          </div>

          <div className={formGroup}>
            <label className={labelClass}>Email</label>
            <input
              type="email"
              placeholder="Enter your Email"
              className={inputClass}
              {...register("email",{required:"Email is required"})}
            />
            {errors.email && <p className={errorClass}>{errors.email.message}</p>}
          </div>

          <div className={formGroup}>
            <label className={labelClass}>Mobile</label>
            <input
              type="number"
              placeholder="Enter your Mobile Number"
              className={inputClass}
              {...register("mobile",{required:"Mobile number is required"})}
            />
            {errors.mobile && <p className={errorClass}>{errors.mobile.message}</p>}
          </div>

          <div className={formGroup}>
            <label className={labelClass}>Designation</label>
            <input
              type="text"
              placeholder="Enter your Designation"
              className={inputClass}
              {...register("designation",{required:"Designation is required"})}
            />
            {errors.designation && <p className={errorClass}>{errors.designation.message}</p>}
          </div>

          <div className={formGroup}>
            <label className={labelClass}>Company Name</label>
            <input
              type="text"
              placeholder="Enter your Company Name"
              className={inputClass}
              {...register("companyName",{required:"Company name is required"})}
            />
            {errors.companyName && <p className={errorClass}>{errors.companyName.message}</p>}
          </div>

          <button type="submit" className={submitBtn}>
            Create Employee
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateEmp;
