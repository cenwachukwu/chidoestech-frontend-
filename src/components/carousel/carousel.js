import React, { useState, useEffect, useMemo } from 'react';
import { Link } from '@reach/router';

const Carousel = props => {
  return (
    <div>
      <h1>block</h1>
      {props.data.map((photo, index) => {
        console.log(photo.blogImage);
      })}
    </div>
  );
};

export default Carousel;
