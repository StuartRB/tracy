import React, {useState} from 'react';
import './App.css';
import {Link} from 'react-router-dom';


function Nav() {

  const [claimNumber, setClaimNumber] = useState(null);

  console.log("claimNumber: ", claimNumber);

  return (
   <nav>
       <h3> Harry Portal</h3>
       <ul className="nav-links">
           <li>
               <Link to="/">Home</Link>
           </li>
           <li>
               <input type="text" onChange={(e) => setClaimNumber(e.target.value)}></input>
               <Link to="/claimdetails">&nbsp;Search</Link>
           </li>
       </ul>
   </nav>
  );
}

export default Nav;
