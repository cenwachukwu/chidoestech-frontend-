import React from 'react';
import Carousel from '../../components/carousel/carousel';

const Home = () => {
  const [isData, setIsData] = useState([]);

  const url = 'https://chidoestech.herokuapp.com/article';

  useEffect(() => {
    Axios.get(url).then(({ data }) => {
      setIsData(data.data);
    });
  }, []);

  return (
    <div className="Home">
      <Carousel data={isData} />
      <h2>We are home</h2>
    </div>
  );
};

export default Home;
