import React, {useState} from "react";
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {

    const [filterSelectedValue, setFilterSelectedValue] = useState('2021');

    const items = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filterSelectedValue;
    })

    const selectedHandler = (selectedData) => {
        setFilterSelectedValue(selectedData);
      }

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filterSelectedValue} onPassSelected={selectedHandler} />
                {/* {filteredItems.length === 0 && <p>No items here</p>} */}
                <ExpensesChart expenses={items}/>
                <ExpensesList items={items} />
            </Card>
        </div>
    );
}

export default Expenses;