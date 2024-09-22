// Column.js
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';

const Column = ({ column, tasks }) => {
  const getCircleColor = (title) => {
    switch (title) {
      case 'To Do 3':
        return 'brown';
      case 'In Progress':
        return 'yellow';
      case 'Done':
        return 'green';
      default:
        return 'gray';
    }
  };

  return (
    <div style={{ margin: '0 20px ' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: getCircleColor(column.title),
              marginRight: '10px',
            }}
          />
          <h2 style={{ color: 'black' }}>{column.title}</h2>
        </div>
        <div>
          <button style={{ marginLeft: '10px', background: 'none', border: 'none', cursor: 'pointer' }}>+</button>
          <button style={{ marginLeft: '10px', background: 'none', border: 'none', cursor: 'pointer' }}>...</button>
        </div>
      </div>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{
              padding: '20px',
              width: '250px',
              minHeight: '500px',
            }}
          >
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
