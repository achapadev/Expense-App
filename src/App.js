// import React from 'react'
// Don't need to import this anymore but used to because underhood react is translating JSX into
// return React.createElement(
//   'div',
//   {},
//   React.createElement('h2', {}, "Let's get started!"),
//   React.createElement(Expenses, {items:expenses})
// )
import React, { useState } from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
]
// lowercase elements are built in html elements
// elements starting with uppercase char are elements defined by developer(components)

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  )
}

export default App
