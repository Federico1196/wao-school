import { Description } from '@mui/icons-material';
import React from 'react';


function serviceItem({name, price, description}) {
  return (
    <>
        <div className="serviceItem">
            <h1>{name}</h1>
            <p>${price}</p>
            <p>{description}</p>

        </div>
    </>
  )
}

export default serviceItem