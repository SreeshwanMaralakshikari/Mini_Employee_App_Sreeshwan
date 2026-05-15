import { useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance";
import {
  pageBackground,
  formCard,
  formTitle,
  formGroup,
  labelClass,
  inputClass,
  submitBtn,
  secondaryBtn,
  errorClass,
  loadingClass,
} from "../styles/common";

function EditEmployee() 
{
  const {
    register,
    handleSubmit,
    formState:{errors},
    setValue,
  } = useForm();

  const{state}=useLocation();
  const navigate=useNavigate();
  const[loading,setLoading]=useState(false);
  const[error,setError]=useState(null);

  // Pre-fill form with existing employee data (Blog App pattern)
  useEffect(()=>{
    if (state) 
    {
      setValue("name", state.name);
      setValue("email", state.email);
      setValue("mobile", state.mobile);
      setValue("designation", state.designation);
      setValue("companyName", state.companyName);
    }
  },[]);

  const saveModifiedEmployee=async(modifiedEmployee)=>{
    try 
    {
      setLoading(true);
      setError(null);

      const res=await axiosInstance.put(`/emp-api/employees/${state._id}`,modifiedEmployee);

      if (res.status===200) 
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
    return <p className={loadingClass}>Saving changes...</p>;
  }

  return (
    <div className={`${pageBackground} py-16 px-4`}>
      <div className={formCard}>
        <h1 className={formTitle}>Edit Employee</h1>

        {/* API Error */}
        {error && <p className={`${errorClass} mb-5`}>{error}</p>}

        <form onSubmit={handleSubmit(saveModifiedEmployee)}>

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
            <label className={labelClass}>Email (cannot be changed)</label>
            <input
              type="email"
              className={`${inputClass} opacity-60 cursor-not-allowed`}
              {...register("email")}
              disabled
            />
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
            Save Changes
          </button>

          <button
            type="button"
            className={`${secondaryBtn} w-full mt-3 text-center`}
            onClick={()=>navigate("/list")}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditEmployee;
