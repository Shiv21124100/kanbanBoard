// KanbanBoard.js
import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';
import './KanbanBoard.css';

const initialData = {
  tasks: {
    'task-1': { id: 'CAM-6', content: 'Enhance Search Functionality', assigneeAvatar: '/image/image.jpeg' },
    'task-2': { id: 'CAM-7', content: 'Integrate Third-Party Payment Gateway', assigneeAvatar: '/image/image.jpeg' },
    'task-3': { id: 'CAM-11', content: 'Conduct Security Vulnerability Assessment', assigneeAvatar:'/image/image.jpeg'},
    'task-4': { id: 'CAM-10', content: 'Upgrade Server Infrastructure', assigneeAvatar: '/image/image.jpeg' },
    'task-5': { id: 'CAM-11', content: 'Implement Role-Based Access Control (RBAC)', assigneeAvatar: '/image/image.jpeg' },
    'task-6': { id: 'CAM-12', content: 'Implement Role-Based Access Control (RBAC)', assigneeAvatar: '/image/image.jpeg' },
    'task-7': { id: 'CAM-13', content: 'Implement Role-Based Access Control (RBAC)', assigneeAvatar: '/image/image.jpeg' },
    // New tasks added below
    'task-8': { id: 'CAM-14', content: 'Refactor Codebase for Maintainability', assigneeAvatar: '/image/image.jpeg' },
    'task-9': { id: 'CAM-15', content: 'Set Up Continuous Integration', assigneeAvatar: '/image/image.jpeg' },
    'task-10': { id: 'CAM-16', content: 'Create API Documentation', assigneeAvatar: '/image/image.jpeg' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To Do',
      taskIds: ['task-1', 'task-2', 'task-8'], // Added more tasks here
    },
    'column-2': {
      id: 'column-2',
      title: 'In Progress',
      taskIds: ['task-3', 'task-10'], // Added more tasks here
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      taskIds: ['task-4', 'task-5', 'task-6', 'task-7'],
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3'],
};

const KanbanBoard = () => {
  const [state, setState] = useState(initialData);

  const onDragEnd = (result) => {
    // Drag and drop logic here
  };

  return (
    <div className="container">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="kanban-board">
          {state.columnOrder.map((columnId) => {
            const column = state.columns[columnId];
            const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);

            return <Column key={column.id} column={column} tasks={tasks} />;
          })}
        </div>
      </DragDropContext>
    </div>
  );
};

export default KanbanBoard;
