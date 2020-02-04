import React from 'react';

function ClaimDetails(props) {

  const {claimNumber} = props.match.params;

  return (
    <div>
        <h1>Claim Details</h1>
        <p> {claimNumber}</p>
     </div>
  );
}

export default ClaimDetails;
