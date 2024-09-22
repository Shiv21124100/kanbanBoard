import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Task from './Task'; // Assuming Task.js and Task.css are in the same directory

const tasks = [
  { id: '1', content: 'Task 1', assigneeAvatar: 'avatar1.png', tag: 'Feature Request' },
  { id: '2', content: 'Task 2', assigneeAvatar: 'avatar2.png', tag: 'Bug' },
  { id: '3', content: 'Task 3', assigneeAvatar: 'avatar3.png', tag: 'Improvement' },
];

const TaskList = () => {
  return (
    <DragDropContext onDragEnd={() => {}}>
      <Droppable droppableId="tasks">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {tasks.map((task, index) => (
              <Task task={task} index={index} key={task.id} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TaskList;
