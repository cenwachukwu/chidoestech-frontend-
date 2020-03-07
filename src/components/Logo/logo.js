import React, { useState, useEffect, useMemo } from 'react';
import { Link } from '@reach/router';
import './logo.css';

const Logo = () => {
  return (
    <div className="logo-container">
      <div className="logo-box">
        <div className="logo-item">
          <h1 className="logo">Chi</h1>
        </div>
        <div className="logo-item">
          <h1 className="logo">Does</h1>
        </div>
        <div className="logo-item">
          <h1 className="logo">Tech</h1>
        </div>
      </div>
    </div>
  );
};

export default Logo;
