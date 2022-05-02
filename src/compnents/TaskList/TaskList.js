import React from "react";
import "./tasklist.css";
import ProTypes from "prop-types";

import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({
  title,
  onAddTask,
  tasks,
  onTaskUpdate,
  taskState,
  onDeleteTask
}) {
  const addTask = () => {
    onAddTask("Nova Tarefa", taskState);
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              taskState={task.state}
              onTaskUpdate={onTaskUpdate}
              onDeleteTask={onDeleteTask}
            />
          );
        })}
        <button onClick={addTask}>Adicionar Tarefa</button>
      </div>
    </div>
  );
}

TaskList.propTypes = {
  title: ProTypes.string.isRequired,
  onAddTask: ProTypes.func.isRequired,
  tasks: ProTypes.array.isRequired
};
