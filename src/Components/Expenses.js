import Card from "./Card"
import "./Expenses.css"
import ExpensesFilter from "./ExpensesFilter";
import { useState } from 'react';
import ExpenseList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props){
      const [filteredYear, setFilteredYear]=useState('2020');
      const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
      }
      const filteredExpenses = props.items.filter(expense => {  //why  .filter is used
        return expense.date.getFullYear().toString() === filteredYear;
      })
      return (<div><Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses}></ExpenseList>
        </Card></div>)
}

export default Expenses;