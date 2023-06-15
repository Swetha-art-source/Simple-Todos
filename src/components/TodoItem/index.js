// Write your code here
import './index.css'

const SimpleTodo = props => {
  const {todoDetails, deleteTodo} = props
  const {title, id} = todoDetails
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="eachListContainer">
      <div>
        <p className="title">{title}</p>
        <button type="button" onClick={onDelete} className="btn">
          Delete
        </button>
      </div>
    </li>
  )
}

export default SimpleTodo
