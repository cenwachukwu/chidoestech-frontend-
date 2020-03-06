import React, { useState, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import Navbar from './Navbar/Navbar';

const App = () => {
  const [isData, setIsData] = useState([]);

  const url = 'https://chidoestech.herokuapp.com/article';

  useEffect(() => {
    Axios.get(url).then(({ data }) => {
      //   console.log(data.data);
      setIsData(data.data);
    });
  }, []);

  const mapedData = useMemo(() => {
    return isData.map((data, index) => {
      console.log(data);
    });
  }, [isData]);

  return (
    <div className="App">
      <h2>Welcome</h2>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
