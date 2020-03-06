import React from 'react';
import { Link } from '@reach/router';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.onRenderMapData = this.onRenderMapData.bind(this);
  }

  render() {
    console.log(this.props.data);
    return (
      <div>
        <h1>block</h1>
      </div>
    );
  }
}

export default Carousel;
