import { useContext } from "react";
import { NavLink } from "react-router";
import { counterContextObj } from "../contexts/ContextProvider";
import { useCounterStore } from "../store/useCounterStore";
import Test from "./Test";
import {
  pageBackground,
  pageWrapper,
  pageTitleClass,
  bodyText,
  primaryBtn,
  secondaryBtn,
  divider,
  headingClass,
} from "../styles/common";

function Home() {
  // Context counter
  const{counter,changeCounter}=useContext(counterContextObj);

  // Zustand counter
  const newCounter=useCounterStore((state) => state.newCounter);
  const incrementCounter=useCounterStore((state) => state.incrementCounter);
  const decrementCounter=useCounterStore((state) => state.decrementCounter);
  const resetCounter=useCounterStore((state) => state.resetCounter);

  console.log("Home");

  return (
    <div className={pageBackground}>
    
      <div className={`${pageWrapper} text-center`}>
        <h1 className={pageTitleClass}>Employee Manager</h1>
        <p className={`${bodyText} mt-4 mb-10 max-w-md mx-auto`}>
          A simple and clean way to manage your company's employee records.
        </p>
        <div className="flex justify-center gap-4">
          <NavLink to="list" className={primaryBtn}>
            View Employees
          </NavLink>
          <NavLink to="create-emp" className={secondaryBtn}>
            Add New Employee
          </NavLink>
        </div>
      </div>

      <div className={`${divider} mx-6`}/>

      <div className={`${pageWrapper} max-w-md`}>
        <h2 className={`${headingClass} mb-6`}>Counter Demo</h2>

        {/* Context Counter */}
        <div className="mb-6">
          <p className="text-sm text-[#6e6e73] mb-2">Context Counter</p>
          <h3 className="text-3xl font-bold text-[#1d1d1f] mb-3">{counter}</h3>
          <button onClick={changeCounter} className="bg-amber-300 px-5 py-2 rounded-full text-sm font-medium">
            Change
          </button>
        </div>

        {/* Zustand Counter */}
        <div className="mb-6">
          <p className="text-sm text-[#6e6e73] mb-2">Zustand Counter</p>
          <h3 className="text-3xl font-bold text-[#1d1d1f] mb-3">{newCounter}</h3>
          <div className="flex gap-3">
            <button onClick={incrementCounter} className="bg-green-500 text-white px-5 py-2 rounded-full text-sm font-medium">+</button>
            <button onClick={decrementCounter} className="bg-red-500 text-white px-5 py-2 rounded-full text-sm font-medium">−</button>
            <button onClick={resetCounter} className="bg-amber-500 text-white px-5 py-2 rounded-full text-sm font-medium">Reset</button>
          </div>
        </div>
        <Test/>
      </div>
    </div>
  );
}

export default Home;
