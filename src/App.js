import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import Navbar from './Navbar/Navbar';

const App = () => {
  const [isData, setIsData] = useState();

  const url = 'https://chidoestech.herokuapp.com/article';

  useEffect(() => {
    Axios.get(url).then(({ data }) => {
      //   console.log(data.data);
      setIsData(data.data);
    });
  }, []);

  return (
    <div className="App">
      <nav>
        <Navbar data={isData} />
      </nav>
      <h2>Welcome</h2>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
