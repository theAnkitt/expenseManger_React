import Expenses from './Components/Expenses';

function App() {
  const expenses = [
    {
      id: "p1",
      title: "Car Insurence",
      date: new Date(2022, 11, 10),
      amount: 1000
    },
    {
      id: "p2",
      title: "Suta",
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
  return (<div>
      <Expenses items={expenses}/> 
      </div>
  )
}

export default App;
