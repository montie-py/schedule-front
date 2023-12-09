import './ExpensesList.css'
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {

    // let expenseItems = <p>No items here</p>;
    // if (props.items.length > 0) {
    //     expenseItems = props.items.map(expense => 
    //         <ExpenseItem
    //         key={expense.id}
    //         title={expense.title} 
    //         price={expense.price} 
    //         date={expense.date} 
    //     />)
    // }
    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses</h2>;
    }
    return (
        /* {filteredItems.length > 0 && 
                    filteredItems.map(expense => 
                        <ExpenseItem
                        key={expense.id}
                        title={expense.title} 
                        price={expense.price} 
                        date={expense.date} 
                    />)
                } */
        <ul className='expenses-list'>
            {
                props.items.map(expense => 
                    <ExpenseItem
                    key={expense.id}
                    title={expense.title} 
                    price={expense.price} 
                    date={expense.date} 
                />)
            }
        </ul>
    );
}

export default ExpensesList;