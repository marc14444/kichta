import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
    name: "expenseSlice",
    initialState:{
        income: 1000,
        expenseList: [],
    },
    reducers:{
        AddExpense: (currentSlice, action)=>{
            currentSlice.expenseList.push({...action.payload, 
                price: Number.parseFloat(action.payload.price)});
            //console.log("AddExpense()",action);
        },
        //autres actions
       setIncome: (currentSlice, action)=>{
            currentSlice.income = Number.parseFloat(action.payload)
        }
        //autres actions
    },
});

const {AddExpense, setIncome}  = expenseSlice.actions;

export { AddExpense ,setIncome}