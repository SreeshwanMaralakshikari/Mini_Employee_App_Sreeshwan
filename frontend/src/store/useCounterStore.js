import {create} from 'zustand'

//create store (keeping {} inside of () because javascript confuses {} with body of function and zustand return object. 
// To solve this we use this

export const useCounterStore=create((set)=>({
    //state
    newCounter:0,

    //functions to modify the State
    incrementCounter:()=>set(state=>({newCounter:state.newCounter+1})),
    decrementCounter:()=>set(state=>({newCounter:state.newCounter-1})),
    resetCounter:()=>set({newCounter:0}),

     //state
    newCounter1:0,

    //functions to modify the State
    incrementCounter1:()=>set(state=>({newCounter1:state.newCounter1+1})),
    decrementCounter1:()=>set(state=>({newCounter1:state.newCounter1-1})),
    resetCounter1:()=>set({newCounter1:0}),


    newUser:{name:"ravi",age:41,email:"ravi@gmail.com"},

    //functions to modify the State
    changeName:()=>set(state=>({...state.newUser,name:"bhanu"})),
    changeAge:()=>set(state=>({...state.newUser,age:28})),
    changeEmail:()=>set(state=>({...state.newUser,email:"bhanu@gmail.com"}))

}));