import ExpenseItem from "./components/ExpenseItem";

function App() {
  //Object
  const exepenses = [
    { id: 'e1', title: 'Car Insuarance', amount: 294.67, date: new Date(2021, 2, 28) },
    { id: 'e2', title: 'Toilet Paper', amount: 24.00, date: new Date(2021, 2, 28) },
    { id: 'e3', title: 'Book', amount: 94.60, date: new Date(2021, 2, 28) },
    { id: 'e4', title: 'Laptop', amount: 1294.67, date: new Date(2021, 2, 28) },
  ];


  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={exepenses[0].title} amount={exepenses[0].amount} date={exepenses[0].date}></ExpenseItem>
      <ExpenseItem title={exepenses[1].title} amount={exepenses[1].amount} date={exepenses[1].date}></ExpenseItem>
      <ExpenseItem title={exepenses[2].title} amount={exepenses[2].amount} date={exepenses[2].date}></ExpenseItem>
      <ExpenseItem title={exepenses[3].title} amount={exepenses[3].amount} date={exepenses[3].date}></ExpenseItem>
      
    </div>
  );
}

export default App;
