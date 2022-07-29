import React, { useState } from 'react'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import './ExpenseItem.css'

// component in React is just a javascript function
// React ensures we receive 1 parameter in every component and that one parameter will be
// object that holds all received attributes as properties
// (key value pairs ..usually named 'props')

function ExpenseItem(props) {
  // each instance of component gets its own separate state which is detached from the others/managed independently by React
  // when state changes its only this instance of component where React will re-evalute the jsx
  const [title, setTitle] = useState(props.title)
  // useState - always get back two values (value itself and updating function)
  // call updating function when state should change
  // React will re-execute comp function and re-evalute JSX code whenever the state changes
  // React will not re-initialize the state on subsequent renders only on first run
  // can create your function either on the click itself via arrow function or separately to keep jsx clean
  // instead it will detect it was initialized in the past and grab latest state (from state update)

  // const clickHandler = () => {
  //   setTitle('Updated!')
  // }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  )
}

export default ExpenseItem
