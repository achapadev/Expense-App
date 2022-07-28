import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import './ExpenseItem.css'

// component in React is just a javascript function
// React ensures we receive 1 parameter in every component and that one parameter will be
// object that holds all received attributes as properties
// (key value pairs ..usually named 'props')

function ExpenseItem(props) {
  //   const month = props.date.toLocaleString('en-US', { month: 'long' })
  //   const day = props.date.toLocaleString('en-US', { day: '2-digit' })
  //   const year = props.date.getFullYear()
  //   moved the above into its own component - ExpenseDate
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
