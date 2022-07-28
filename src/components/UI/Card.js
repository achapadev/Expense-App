import './Card.css'

// we have built a Card container component (Wrapper Component) which acts as shell around any content
// props.children - special prop built into react which every comp receives even if never setting explicitly
// Children is special prop which value is always
// the content between opening and closing tags of custom component

function Card(props) {
  const classes = 'card ' + props.className
  return <div className={classes}>{props.children}</div>
}

export default Card
