import React from 'react'
import { useState } from 'react';
import style from './rides.module.css'
import Card from '../Card/Card';

export default function Rides(props) {
  const {tabs,curr,clicked}=style;
  const [tabNumber,setTabNumber]=useState(1);
  const rideInfo=props.rideInfo;
  const userStation=props.userStation;
  
  // rideInfo.map((train)=>(
     
  // ));

  const handleClick1 = () =>{
    setTabNumber(1);
    
  }
  const handleClick2 = () =>{
    setTabNumber(2);
  }
  const handleClick3 = () =>{
    setTabNumber(3);
  }
  console.log(tabNumber);
  return (
    <>
       <div className={tabs}>
         <button className={tabNumber!==1?curr:clicked} onClick={handleClick1}>
             Nearest Rides(21)
         </button>
         <button className={tabNumber!==2?curr:clicked}onClick={handleClick2}>
             Upcoming Rides
         </button>
         <button className={tabNumber!==3?curr:clicked}onClick={handleClick3}>
             Past Rides
         </button>
       </div>
       <div className='main'>
          {rideInfo.map((train,index)=>(
              <Card key={index} city={train.city} date={train.date}
              id={train.id} pic={train.map_url} origin={train.origin_station_code}
              state={train.state} pathArray={train.station_path} stationCode={userStation} destination={train.destination_address_code}/>
          ))}

      </div>
    </>
  )
}
