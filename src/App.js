import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar/Navbar';

const App = () => {
  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>
      <h2>Welcome</h2>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
