import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch,budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
        });
        setNewBudget(event.target.value);
    }

    const alertType = newBudget > 20000 ? 'alert-danger' : 'alert-success';

    return (
        <div className={`alert ${alertType}`}>
        <span>Budget: £</span>
        <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;