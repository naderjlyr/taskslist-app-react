import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";

function AddTask(props) {
  const [taskTitle, setTaskTitle] = useState("");

  const onSubmit = (evt) => {
    // Stop form being submmited to same file and reloading the page
    evt.preventDefault();

    // Validate todo text
    if (!taskTitle) {
      alert("Please add a task description.");
      return;
    }

    props.addTask(taskTitle);

    // Clear task text in component state
    setTaskTitle("");
  };

  return (
    <div className="mx-4 mt-6">
      <form
        onSubmit={onSubmit}
        className="flex items-center transition duration-500 ease-in-out py-2 border-b-2 border-gray-300 focus-within:border-b-2 focus-within:border-pink-600"
      >
        <input
          name="task-title"
          type="text"
          placeholder="Add task..."
          value={taskTitle}
          onChange={(evt) => setTaskTitle(evt.target.value)}
          className="flex-1 px-2.5 bg-gray-200 placeholder-gray-500 focus:outline-none"
          data-testid="task-input-field"
        />
        <button
          type="submit"
          className="transition duration-200 ease-in-out text-gray-400 focus:outline-none hover:text-pink-500 text-lg px-2 cursor-pointer"
          data-testid="task-submit-btn"
        >
          <FaEdit />
        </button>
      </form>
    </div>
  );
}

AddTask.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default AddTask;
