import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import axiosInstance from '../axiosInstance';
import {
  pageBackground,
  pageWrapper,
  headingClass,
  empGrid,
  empCard,
  empName,
  empDetail,
  empActions,
  viewBtn,
  editBtn,
  dangerBtn,
  loadingClass,
  errorClass,
  emptyStateClass,
} from '../styles/common';

function ListOfEmps() {
  const[emps,setEmps]=useState([]);
  const[loading,setLoading]=useState(false);
  const[error,setError]=useState(null);
  const navigate=useNavigate();

  const gotoEmployee=(empObj)=>
  {
    navigate("/employee",{state:empObj});
  };

  const gotoEditEmployee=(empObj)=>
  {
    navigate("/edit-emp",{state:empObj});
  };

  const deleteEmployeeById=async(empObjId)=>{
    try 
    {
      setLoading(true);
      const res=await axiosInstance.delete(`/emp-api/employees/${empObjId}`);
      if(res.status===200)
      {
        getEmps(); // Refresh list
      }
    }
    catch(err)
    {
      console.log("Error is: ",err);
      setError(err.response?.data?.error||err.message);
    }
    finally
    {
      setLoading(false);
    }
  };

  const getEmps=async()=>{
    try 
    {
      setLoading(true);
      setError(null);
      const res=await axiosInstance.get("/emp-api/list");
      if(res.status===200)
      {
        setEmps(res.data.payload);
      }
    }
    catch (err) 
    {
      console.log("Error is: ", err);
      // 404 just means no employees yet — not a real error to show
      if(err.response?.status!==404) 
      {
        setError(err.response?.data?.message||err.message);
      }
    }
    finally 
    {
      setLoading(false);
    }
  };

  useEffect(()=>
  {
    getEmps();
  },[]);

  if(loading)
  {
    return <p className={loadingClass}>Loading employees...</p>;
  }

  if(error)
  {
    return <p className={`${errorClass} m-10`}>{error}</p>;
  }

  return (
    <div className={pageBackground}>
      <div className={pageWrapper}>
        <h1 className={`${headingClass} mb-8`}>All Employees</h1>

        {emps.length===0 ? (
          <p className={emptyStateClass}>No employees found. Add your first employee!</p>
        ) : (
          <div className={empGrid}>
            {emps.map((empObj) => (
              <div key={empObj._id} className={empCard}>
                <p className={empName}>{empObj.name}</p>
                <p className={empDetail}>{empObj.designation}</p>
                <p className={empDetail}>{empObj.companyName}</p>
                <p className={empDetail}>{empObj.email}</p>
                <p className={empDetail}>{empObj.mobile}</p>

                <div className={empActions}>
                  <button onClick={()=>gotoEmployee(empObj)} className={viewBtn}>
                    View
                  </button>
                  <button onClick={()=>gotoEditEmployee(empObj)} className={editBtn}>
                    Edit
                  </button>
                  <button onClick={()=>deleteEmployeeById(empObj._id)} className={dangerBtn}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ListOfEmps;
