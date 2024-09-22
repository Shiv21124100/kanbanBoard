import React from 'react';
import Menu from './Menu';
import './App.css';
import headerImage from './images/home.png'; // Adjust the path as needed
import AssignmentText from './AssignmentText';

const App = () => {
  return (
    <div style={{ padding: '20px 0 0 0' }}> {/* Top margin only */}
    
      <div
        style={{
          backgroundImage: `url(${headerImage})`,
          backgroundSize: 'cover',
          height: '60vh',
          width: '100%',
        }}
      ></div>
         <AssignmentText />
      <div style={{ marginTop: '70px', marginLeft: '250px' }}> {/* Left margin added */}
        <Menu />
      </div>
   
    </div>
  );
};

export default App;
