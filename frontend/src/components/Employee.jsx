import { useLocation, useNavigate } from "react-router";
import {
  pageBackground,
  pageWrapper,
  headingClass,
  empCard,
  empName,
  empDetail,
  primaryBtn,
  secondaryBtn,
  divider,
  mutedText,
} from "../styles/common";

function Employee() {
  const{state}=useLocation();
  const navigate=useNavigate();

  if (!state) 
  {
    return (
      <div className={`${pageBackground} ${pageWrapper} text-center`}>
        <p className={mutedText}>No employee data found. Please go back to the list.</p>
        <button className={`${primaryBtn} mt-6`} onClick={() => navigate("/list")}>
          Back to Employees
        </button>
      </div>
    );
  }

  return (
    <div className={`${pageBackground} py-16 px-4`}>
      <div className="max-w-md mx-auto">
        <h2 className={`${headingClass} mb-6`}>Employee Details</h2>

        <div className={empCard}>
          <p className={empName}>{state.name}</p>
          <p className={empDetail}>{state.designation}—{state.companyName}</p>

          <div className={divider}/>

          <p className={empDetail}>{state.email}</p>
          <p className={empDetail}>{state.mobile}</p>
        </div>

        <div className="flex gap-3 mt-6">
          <button className={secondaryBtn} onClick={()=>navigate("/list")}>
            ← Back to List
          </button>
          <button className={primaryBtn} onClick={()=>navigate("/edit-emp",{state})}>
            Edit Employee
          </button>
        </div>
      </div>
    </div>
  );
}

export default Employee;
