import React, { useState, useEffect, useMemo } from 'react';
import Carousel from '../../components/carousel/carousel';
import Logo from '../../components/Logo/logo';

const Home = props => {
  //   console.log(props.data);
  return (
    <div className="Home">
      <Logo />
      <h2>We are home</h2>
    </div>
  );
};

export default Home;
