import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTask from "./AddTask";
import TasksFooter from "./TasksFooter";
import TasksHeader from "./TasksHeader";
import TaskItem from "./TaskItem";

function TodosList() {
  const [tasksList, setTaskList] = useState([]);

  // Add a new todo item
  const addTask = (taskTitle) => {
    let newTask = {
      id: uuidv4(),
      title: taskTitle, // new in ES6: same as title: title
      completed: false,
    };

    // [...] = spread operator (copy items)
    // Used because we can't (and shouldn't) change state values directly
    setTaskList([...tasksList, newTask]);
  };

  // Delete a todo item
  const removeTask = (id) => {
    setTaskList(tasksList.filter((task) => task.id !== id));
  };

  // Toggle completed state of todo item
  const markComplete = (id) => {
    setTaskList(
      tasksList.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="flex flex-col bg-gray-200 rounded shadow-lg">
      <TasksHeader />

      <AddTask addTodo={addTask} />

      <div className="mx-4 my-6 h-96 overflow-auto">
        {tasksList.length > 0 ? (
          // If there are todo items, show them in a list
          <ul className="mt-4" data-testid="todos-list">
            {tasksList.map((task) => (
              <TaskItem
                key={task.id}
                todo={task}
                markComplete={markComplete}
                delTodo={removeTask}
              />
            ))}
          </ul>
        ) : (
          // No todo items, all caught up
          <p
            className="my-16 text-lg text-center text-gray-500"
            data-testid="empty-todos-message"
          >
            You're all set.
          </p>
        )}
      </div>

      <TasksFooter
        totalTasks={tasksList.length}
        doneTasks={tasksList.filter((task) => task.completed).length}
      />
    </div>
  );
}

export default TodosList;
