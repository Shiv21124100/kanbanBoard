// Task.js
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './Task.css';  // Import the CSS for task styling

const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          className="task-card"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          
          ref={provided.innerRef}
        >
          <div className="task-header">
            <span className="task-id">{task.id}</span>
            <img
              className="task-avatar"
              src={task.assigneeAvatar}
              alt="Assignee Avatar"
            />
          </div>
          <div className="task-title">{task.content}</div>
          <div className="task-footer">
          <span className="task-tag">...{task.tag}</span>
          <span className="task-separator"></span> {/* Circle separator */}
            <span className="task-tag">Feature Request</span>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
