import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        props.passFormData(enteredExpenseData);
    }

    const toggleFormShown = () => {
        setFormshown(formshown > 0 ? 0 : 1);
    }

    const [formshown, setFormshown] = useState(0);

    let newExpenseForm = <div className="new-expense__actions">
                                <button onClick={toggleFormShown}>Add new expense</button>
                            </div>;
    if (formshown > 0) {
        newExpenseForm = <ExpenseForm 
                            toggleFormShown={toggleFormShown} 
                            onFormSubmitted={saveExpenseDataHandler} />;
    }

    return (
        <div className="new-expense">
            {newExpenseForm}
        </div>
    )
}

export default NewExpense;