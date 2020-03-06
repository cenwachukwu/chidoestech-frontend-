import React, { useState, useEffect, useMemo } from 'react';
import Carousel from '../../components/carousel/carousel';

const Home = props => {
  //   console.log(props.data);
  return (
    <div className="Home">
      <Carousel data={props.data} />
      <h2>We are home</h2>
    </div>
  );
};

export default Home;
