import React, { useState, useEffect, useMemo } from 'react';
import Logo from '../../components/Logo/logo';
import BlogPost from '../../components/blogpost/blogpost';
import Aside from '../../components/aside/aside';
import './Home.css';

const Home = props => {
  return (
    <div className="Home">
      <Logo />
      <div className="blog-sections">
        <div className="sections">
          <div className="blogposts">
            <BlogPost data={props.data} />
          </div>
          <div className="aside">
            <Aside data={props.data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
