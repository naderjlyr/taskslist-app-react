import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTask from "./AddTask";
import TasksFooter from "./TasksFooter";
import TasksHeader from "./TasksHeader";
import TaskItem from "./TaskItem";

const API_BASE = "http://localhost:3001";

function TodosList() {
  const [tasksList, setTasksList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    GetTasks();
  }, []);
  const GetTasks = () => {
    fetch(API_BASE + "/taskslist")
      .then((res) => res.json())
      .then((data) => {
        setTasksList(data);
        setLoading((prevLoading) => !prevLoading);
      })
      .catch((error) => console.error("Error:", error));
  };

  // Toggle completed state of todo item
  const markComplete = async (id) => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "Fetch PUT Request Example" }),
    };
    const data = await fetch(
      API_BASE + "/task/complete/" + id,
      requestOptions
    ).then((res) => res.json());
    console.log(data);
    setTasksList((tasks) =>
      tasks.map((task) => {
        if (task._id === data._id) {
          task.complete = data.complete;
        }
        return task;
      })
    );
  };
  const deleteTask = async (id) => {
    const data = await fetch(API_BASE + "/task/delete/" + id, {
      method: "DELETE",
    }).then((res) => res.json());

    setTasksList((tasks) => tasks.filter((task) => task._id !== data._id));
  };
  const addTask = async (taskTitle) => {
    const data = await fetch(API_BASE + "/task/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: taskTitle,
      }),
    }).then((res) => res.json());
    setTasksList([...tasksList, data]);
  };

  return (
    <div className="flex flex-col bg-gray-200 rounded shadow-lg">
      <TasksHeader />

      <AddTask addTask={addTask} />

      <div className="mx-4 my-6 h-96 overflow-auto">
        {tasksList.length > 0 ? (
          // If there are todo items, show them in a list
          <ul className="mt-4" data-testid="todos-list">
            {tasksList.map((task) => (
              <TaskItem
                key={task._id}
                task={task}
                markComplete={markComplete}
                delTask={deleteTask}
              />
            ))}
          </ul>
        ) : (
          // No todo items, all caught up
          <p
            className="my-16 text-lg text-center text-gray-500"
            data-testid="empty-todos-message"
          >
            {isLoading ? "Loading the Tasks" : "No Tasks!"}
          </p>
        )}
      </div>

      <TasksFooter
        totalTasks={tasksList.length}
        doneTasks={tasksList.filter((task) => task.complete).length}
      />
    </div>
  );
}

export default TodosList;
