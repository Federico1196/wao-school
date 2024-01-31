import React from 'react'
import "../styles/Service.css";
import { ServiceList } from '../helpers/ServiceList';
import ServiceItem from '../components/serviceItem';
import { PackageList } from '../helpers/PackagesList';
import PackageItem from '../components/PackageItem';


function Service() {
  return (
    <>
      <div className="service">
        <h1 className="serviceTitle">Our Packages</h1>
        <div className="serviceList">
          {PackageList.map((packageItem, key) => {
            return (
              <PackageItem 
                key={key}
                name={packageItem.name} 
                price={packageItem.price}
                description={packageItem.description}
              />
            );
          })}
        </div>
        <div id="place"></div>
        <h1 className="serviceTitle" id="servicesTitle">Our Services</h1>
        <div className="serviceList" id='Services'>
          {ServiceList.map((serviceItem, key) => {
              return (
                <ServiceItem 
                  key = {key}
                  name={serviceItem.name} 
                  description={serviceItem.description}
                />
              );
            })}
        </div>
      </div>
    </>
  )
}

export default Service