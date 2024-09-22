// Menu.js
import React, { useState } from 'react';
import KanbanBoard from './KanbanBoard';
import Kanab from './kanab';

const Menu = () => {
  const [selectedOption, setSelectedOption] = useState('kanban');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <select 
        onChange={handleChange} 
        value={selectedOption} 
        style={{ padding: '5px', fontSize: '16px', color: "black" }} 
      >
        <option value="kanban">Kanban Board</option>
        <option value="kanab">prority</option>
        <option value="option3">Option 3</option>
      </select>

      <div style={{ marginTop: '0px'  }}> {/* Adjust this value as needed */}
        {selectedOption === 'kanban' && <KanbanBoard />}
        {selectedOption === 'kanab' && <Kanab />}
      </div>
    </div>
  );
};

export default Menu;
