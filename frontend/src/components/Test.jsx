import { counterContextObj } from "../contexts/ContextProvider"
import { useContext } from "react"
import { useCounterStore } from "../store/useCounterStore";

function Test() {

    const{counter1,changeCounter1}=useContext(counterContextObj);
    console.log("Test");

    let newCounter1=useCounterStore((state)=>state.newCounter1);
    let incrementCounter1=useCounterStore((state)=>state.incrementCounter1);
    let decrementCounter1=useCounterStore((state)=>state.decrementCounter1);
    let resetCounter1=useCounterStore((state)=>state.resetCounter1);

  return (
    <div>
        <h1 className="text-4xl">Counter1: {counter1}</h1>
        <button onClick={changeCounter1} className="bg-amber-300 p-5">
            Change
        </button>

        <h1 className="text-4xl">Zustand Counter1: {newCounter1}</h1>
        <button onClick={incrementCounter1} className="bg-green-500 p-5">
            +
        </button>

        <button onClick={decrementCounter1} className="bg-red-500 p-5">
            -
        </button>

        <button onClick={resetCounter1} className="bg-amber-500 p-5">
            Reset
        </button>
    </div>
  )
}

export default Test