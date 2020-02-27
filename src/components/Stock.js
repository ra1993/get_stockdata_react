import React from 'react';


const Stock = (props) => {
  return (
    <div>

      <h3>{props.data.symbol}</h3>  
      <p>{props.data.latestPrice}</p> 
    </div>
  )
}

export default Stock;