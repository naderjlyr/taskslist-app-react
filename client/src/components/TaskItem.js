import { FaTrashAlt } from "react-icons/fa";
import PropTypes from "prop-types";

function TaskItem(props) {
  let textDecorationClass = props.task.complete
    ? "line-through"
    : "no-underline";
  let textColorClass = props.task.complete ? "text-pink-600" : "text-gray-800";

  return (
    <li
      className={`cursor-pointer flex items-center space-x-1 py-2.5 px-2.5 border-b border-gray-300 transition duration-300 ease-in ${textDecorationClass} ${textColorClass}`}
      data-testid="todo-item"
    >
      <input
        name="completed-checkbox"
        type="checkbox"
        className="form-checkbox rounded text-pink-600 shadow-none focus:shadow-none focus:ring-0 focus:ring-offset-0 focus:outline-none"
        checked={props.task.complete}
        value={props.task.complete}
        onChange={() => props.markComplete(props.task._id)}
        data-testid="task-completed-checkbox"
      />
      <span className="flex-1 px-2 min-w-0 break-words">{props.task.text}</span>

      <button
        onClick={() => props.delTask(props.task._id)}
        className="transition duration-200 ease-in-out text-gray-400 hover:text-pink-500 focus:outline-none"
        data-testid="delete-task-btn"
      >
        <FaTrashAlt />
      </button>
    </li>
  );
}

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTask: PropTypes.func.isRequired,
};

export default TaskItem;
