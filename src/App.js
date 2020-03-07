import React, { useState, useEffect, useMemo } from 'react';
import { Router } from '@reach/router';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home/Home';

const App = () => {
  const [isData, setIsData] = useState([]);

  const url = 'https://chidoestech.herokuapp.com/article';

  useEffect(() => {
    Axios.get(url).then(({ data }) => {
      setIsData(data.data);
    });
  }, []);

  return (
    <React.StrictMode>
      <div className="App">
        <nav>
          <Navbar />
        </nav>
        <Router>
          <Home path="/" data={isData} />
        </Router>
      </div>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
