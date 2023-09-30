import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch,budget,expenses,currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => (total += item.cost), 0);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    if(newBudget > 20000) {
        setNewBudget(20000);
        alert("The budget cannot exceed £20.000");
        return;
    }else if(newBudget < totalExpenses) {
        setNewBudget(totalExpenses);
        alert("The budget cannot be lower than total expenses of £"+totalExpenses);
        return;
    }
    if(newBudget !== budget) {
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
        }); 
    }

    return (
        <div className={`alert alert-success`}>
        <span>Budget: {currency}</span>
        <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;