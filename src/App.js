import { useState } from 'react';
import Expenses from './Components/Expenses';
import NewExpense from './Components/NewExpense';

const Dummy_Expenses = [
  {
    id: "p1",
    title: "Car Insurence",
    date: new Date(2022, 11, 10),
    amount: 1000
  },
  {
    id: "p2",
    title: "Smile",
    date: new Date(2022, 2, 2),
    amount: 2099
  },
  {
    id: "p3",
    title: "Notebook",
    date: new Date(2021, 12, 12),
    amount: 199
  }
];
function App() {
  const [expenses, setExpenses]= useState(Dummy_Expenses);
  const addExpenseHandler = (expense)=>{
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses];
    });
  }
  return (<div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/> 
      </div>
  )
}

export default App;
