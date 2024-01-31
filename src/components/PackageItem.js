import React from 'react';


function PackageItem({name, price, description}) {
  return (
    <>
        <div className="PackageItem">
            <h1>{name}</h1>
            <p>${price}</p>
            <p>{description}</p>

        </div>
    </>
  )
}

export default PackageItem