import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
        <h1>Home</h1>
        
        <Link 
        to={{
          pathname: `/claimdetails/098282829`,
          claimNumber: {name: '098282829'}
        }}>098282829</Link>
     </div>
  );
}

export default Home;
