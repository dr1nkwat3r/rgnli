import React from 'react';
import { Link } from 'react-router-dom';

const TestRoute = () => {

  return (
    <div style={{ backgroundColor:"gray", height:"150vh" }}>
        <h2>TestRoute</h2>
        <Link to='/'>Back to Home</Link>


    </div>
  )
}

export default TestRoute;
