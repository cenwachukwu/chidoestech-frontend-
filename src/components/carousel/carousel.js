import React, { useState, useEffect, useMemo } from 'react';
import { Link } from '@reach/router';

const Carousel = props => {
  const [isCurrentImageIndex, setIsCurrentImageIndex] = useState(0);

  const prevSlide = e => {
    const lastIndex = isCurrentImageIndex - 1;
  };

  const nextSlide = e => {};

  return (
    <div className="carousel">
      <h1>block</h1>
      {props.data.map((photo, index) => {
        console.log(photo.blogImage);
        return (
          <img key={index} src={photo.blogImage} alt="blog post thumbnail" />
        );
      })}
    </div>
  );
};

export default Carousel;
